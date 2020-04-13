import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		selectedIngredients: ["chicken breast", "tomatoes"]
	},
	mutations: {
		addIngredient(state, ingredientName) {
			console.log("add");
			state.selectedIngredients = state.selectedIngredients.map(x => x).push(ingredientName);
		},
		removeIngredient(state, ingredientName) {
			console.log("remove");
			state.selectedIngredients = state.selectedIngredients.filter(i => i !== ingredientName);
		}
	}
})

new Vue({
	render: h => h(App),
	store
}).$mount('#app')
