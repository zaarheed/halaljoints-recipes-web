<template>
	<div class="max-w-sm rounded overlow-hidden shadow-lg flex flex-col relative">

		<div class="absolute z-20 w-16 h-16 flex justify-center items-center right-0">
			<div
				class="w-10 h-10 bg-dark rounded-full leading-10 text-white hover:bg-dark focus:outline-none flex items-center justify-center cursor-pointer"
				v-on:click="openPopup"
			>
				<img class="h-4 w-4" src="../assets/expand.svg" alt="Expand Icon" />
			</div>
		</div>
		
		<img class="w-full rounded" :src="image" :alt="name">

		<div class="p-2 flex flex-col justify-between h-full">
			<div class="font-bold text-xl mb-0">
				{{name}}
			</div>

			<div v-if="usedIngredients.length > 0">
				<span
					v-for="ingredient of usedIngredients"
					:key="ingredient.id"
					class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-light text-gray-700 mr-2"
				>
					{{ingredient.name}}
				</span>
			</div>
		</div>

		<RecipeModal
			v-if="showModal === true"
			:recipe="selectedRecipe"
			@on-close="closePopup"
		/>
	</div>
</template>

<script>
import RecipeModal from "./RecipeModal";
import axios from "axios";
import singleRecipe from "../static-data/recipe.json";

export default {
	name: 'RecipesList',
	data() {
		return {
			selectedRecipe: null,
			showModal: false
		}
	},
	methods: {
		closePopup: function () {
			this.showModal = false;
			this.selectedRecipe = null;
		},
		openPopup: async function () {
			//const response = await axios.get(`https://api.spoonacular.com/recipes/${this.unique}/information?includeNutrition=false&apiKey=0ffdca90a29b485dbe189c73ab9e3f2f`);

			console.log("recipe", singleRecipe);

			this.selectedRecipe = singleRecipe;
			this.showModal = true;
		}
	},
	props: {
		unique: null,
		name: null,
		image: null,
		usedIngredients: Array
	},
	components: {
		RecipeModal
	}
}
</script>

<style scoped>
</style>
