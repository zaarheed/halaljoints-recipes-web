<template>
	<main>
		<section class="flex px-3 bg-dark text-white justify-end py-2">
			<button class="bg-transparent hover:bg-transparent text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" v-on:click="getRecipes">
				Get Recipes!
			</button>
		</section>

		<section class="px-3 mb-1 py-2">
			<RecipesList />
		</section>
	</main>
</template>

<script>
import RecipesList from "./RecipesList";

export default {
	name: 'Main',
	data() {
		return {
			message: null
		}
	},
	methods: {
		getRecipes: function () {
			this.$store.dispatch('getRecipes');
		}
	},
	props: {},
	components: {
		RecipesList
	}
}
</script>

<style scoped>
.bg-dark {
	background: #13293D;
}
</style>
