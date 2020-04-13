<template>
	<div class="selected-ingredients-wrapper">
		<ul class="min-h-20">
			<li
				v-for="ingredient of selectedIngredients"
				v-bind:key="ingredient"
				class="bg-orange-100 px-2 inline-block rounded-full mx-1 mb-2 cursor-pointer hover:bg-orange-200"
				v-on:click="deleteIngredient(ingredient)"
			>
				{{ingredient}}
				<span className="px-1 text-red-600">x</span>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'SelectedIngredients',
	computed: {
		selectedIngredients () {
			console.log("selected ingredients", this.$store);
			return this.$store.state.selectedIngredients;
		}
	},
	methods: {
		deleteIngredient: function (ingredientName) {
			this.$store.commit('removeIngredient', ingredientName);
		},
	},
	components: {
	}
}
</script>

<style scoped>
</style>
