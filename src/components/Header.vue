<template>
	<header class="bg-dark header">
		<img src="../assets/logo.png" class="w-64 m-auto mb-4">
		<h1 class="font-sans text-3xl text-center text-white mb-2">Lockdown Recipes</h1>

		<AddIngredient />
		<SelectedIngredients />

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
	}
}
</script>

<style scoped>
.bg-dark {
	background: #13293D;
}
</style>
