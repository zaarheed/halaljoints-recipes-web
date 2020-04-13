import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		selectedIngredients: []
	},
	mutations: {
		addIngredient(state, ingredientName) {
			state.selectedIngredients = [...state.selectedIngredients, ingredientName];
		},
		removeIngredient(state, ingredientName) {
			state.selectedIngredients = state.selectedIngredients.filter(i => i !== ingredientName);
		}
	}
})

new Vue({
	render: h => h(App),
	store
}).$mount('#app')
