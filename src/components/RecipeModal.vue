<template>
	<div class="modal-mask">
		<div class="absolute z-20 w-16 h-16 flex justify-center items-center right-0">
			<button
				class=" w-10 h-10 bg-orange-500 rounded-full leading-10 text-white hover:bg-orange-400 focus:outline-none"
				v-on:click="close"
			>
				✕
			</button>
		</div>
		
		<div class="pb-1/2 relative bg-gray-100">
			<img class="absolute top-0 left-0 w-full h-full object-cover" :src="recipe.image" :alt="recipe.name" />
		</div>
		
		<div class="p-6 border-b border-orange-200">
			<h2 class="text-3xl font-semibold">{{recipe.name}}</h2>
			<p class="text-sm text-gray-600">
				From
				<a href={sourceUrl} target="_blank" rel="noopener noreferrer">
					{creditsText}
				</a>
			</p>
		</div>
		
		<div class="p-6">
			<h3 class="text-xl mb-2">Ingredients</h3>
			<ul>
				<li class="text-sm text-gray-600 p-3 bg-gray-100 odd:bg-gray-200" v-for="ingredient of recipe.extendedIngredients" :key="ingredient.id">
					{{ingredient.original}}
				</li>
			</ul>
		</div>

		<div class="p-6">
			<div v-if="recipe.analyzedInstructions.lengh > 0">
				<h3 class="text-xl mb-2">Instructions</h3>

				<ul>
					<li class="text-sm mb-3 flex items-baseline" v-for="step of analyzedInstructions[0].steps" :key="step.number">
						<span class="w-10 h-10 leading-10 bg-organge-600 text-white inline-block text-center rounded-full mr-2 flex-shrink-0">
							{{step.number}}
						</span>
						<span>{{step.step}}</span>
					</li>
				</ul>
			</div>

			<div v-if="recipe.analyzedInstructions.length < 1">
				<a :href="recipe.sourceUrl" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-400">
					Click for instructions
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecipeModal',
	computed: {
		selectedIngredients () {
			return this.$store.state.selectedIngredients;
		}
	},
	methods: {
		close: function () {
			console.log("close in modal");
			this.$emit('on-close');
		},
		deleteIngredient: function (ingredientName) {
			this.$store.commit('removeIngredient', ingredientName);
		},
	},
	props: {
		recipe: {}
	},
	components: {
	}
}
</script>

<style scoped>
.modal-mask {
	position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 999;
}
</style>
