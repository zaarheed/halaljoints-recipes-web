<template>
	<div class="modal-mask">
		<div class="bg-white m-auto max-w-3xl h-screen overflow-y-auto modal">
			<div class="absolute z-20 w-16 h-16 flex justify-center items-center right-0">
				<button class="w-10 h-10 bg-dark-500 rounded-full leading-10 text-white hover:bg-dark-400 focus:outline-none" v-on:click="close">
					✕
				</button>
			</div>
			
			<div class="relative bg-gray-100" style="padding-bottom: 50%;">
				<img class="absolute top-0 left-0 w-full h-full object-cover" :src="recipe.image" :alt="recipe.title" />
			</div>
			
			<div class="p-4 border-b border-dark-200">
				<h2 class="text-2xl font-semibold">{{ recipe.title }}</h2>
				<p class="text-sm text-gray-600">
					From
					<a :href="recipe.sourceUrl" target="_blank" rel="noopener noreferrer" v-if="recipe.creditsText">
						{{ recipe.creditsText }}
					</a>
				</p>
			</div>
			
			<div class="p-6">
				<h3 class="text-xl mb-2">Ingredients</h3>
				<ul>
					<li class="text-sm text-gray-600 p-3 bg-gray-100 odd:bg-gray-200 mb-1 ingredient" v-for="ingredient of recipe.extendedIngredients" :key="ingredient.id">
						{{ingredient.original}}
					</li>
				</ul>
			</div>

			<div class="p-6">
				<div v-if="recipe.analyzedInstructions.length > 0">
					<h3 class="text-xl mb-2">Instructions</h3>

					<ul>
						<li class="text-sm mb-3 flex items-baseline" v-for="step of recipe.analyzedInstructions[0].steps" :key="step.number">
							<span class="w-10 h-10 leading-10 bg-dark text-white inline-block text-center rounded-full mr-2 flex-shrink-0">
								{{step.number}}
							</span>
							<span>{{step.step}}</span>
						</li>
					</ul>
				</div>

				<div v-if="recipe.analyzedInstructions.length < 1">
					<a :href="recipe.sourceUrl" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-md bg-dark text-white hover:bg-dark">
						Click for instructions
					</a>
				</div>
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
	created: function () {
		console.log(this.recipe);
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
		recipe: null
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
    z-index: 999;
	display: flex;
}

span.ingredient:nth-child(odd) {
	background-color: #edf2f7;
}

.pb-50p {
	padding-bottom: 50%;
}
</style>
