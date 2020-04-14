<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-black">
		<RecipeCard
			v-for="recipe of recipes"
			:key="recipe.id"
			:unique="recipe.id"
			:image="recipe.image"
			:name="recipe.title"
			:usedIngredients="recipe.usedIngredients"
		/>
	</div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default {
	name: 'RecipesList',
	computed: {
		recipes() {
			console.log("recipes computed", this.$store.state);
			return this.$store.state.recipes;
		}
	},
	data() {
		return {}
	},
	methods: {},
	props: {},
	components: {
		RecipeCard
	}
}
</script>

<style scoped>
.recipe-grid {
	display: grid;
	grid-gap: 1rem;
	gap: 1rem;
	grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 768px) {
	.recipe-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (min-width: 1280px) {
	.recipe-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
