<template>
	<header class="bg-dark bg-image header pb-2">
		<div class="container mx-auto">
			<h1 class="font-sans text-3xl text-center text-light font-bold">Ramadan Recipes</h1>
			<h2 class="font-sans text-sm text-center text-light mb-4 uppercase tracking-widest font-thin">Lockdown Edition</h2>

			<AddIngredient />
			<SelectedIngredients />

			<section class="flex px-3 text-white justify-end py-2">
				<button class="bg-dark text-light bg-dark font-semibold py-2 px-4 border border-gray-400 rounded shadow" v-on:click="getRecipes">
					Get Recipes!
				</button>
			</section>
		</div>
	</header>
</template>

<script>
import AddIngredient from "./AddIngredient";
import SelectedIngredients from "./SelectedIngredients";

export default {
	name: 'Header',
	components: {
		AddIngredient,
		SelectedIngredients
	},
	methods: {
		getRecipes: function () {
			this.$store.dispatch('getRecipes');
		}
	}
}
</script>

<style scoped>
.bg-image {
	background-image: url("../assets/header-bg.png");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
