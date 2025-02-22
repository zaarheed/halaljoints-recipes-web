import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import example from "./static-data/example.json";
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: [],
		selectedIngredients: []
	},
	mutations: {
		addIngredient(state, ingredientName) {
			state.selectedIngredients = [...state.selectedIngredients, ingredientName];
		},
		removeIngredient(state, ingredientName) {
			state.selectedIngredients = state.selectedIngredients.filter(i => i !== ingredientName);
		},
		setRecipes(state, recipes) {
			state.recipes = recipes.map(r => r);
		}
	},
	actions: {
		async getRecipes ({ commit, state }) {
			const apiKey = "";

			const encodedIngredients = state.selectedIngredients.map(i => encodeURIComponent(i)).join();

			try {
				const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedIngredients}&number=100&ranking=2&ignorePantry=false&apiKey=${apiKey}`)
				console.log("recipes to commit", response.data);
				commit('setRecipes', response.data);
			}
			catch (error) {
				console.error("error", error);
				commit('setRecipes', []);
			}
		},
	}
})

new Vue({
	render: h => h(App),
	store
}).$mount('#app')
