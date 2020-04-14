<template>
	<div class="flex flex-wrap mx-3 mb-6">
		<div class="w-full">
			<label class="block uppercase tracking-wide text-light text-xs font-light mb-1" for="search-ingredient">
				Enter ingredients you have available in your kitchen
			</label>

			<VueAutosuggest
				:limit="limit"
				:suggestions="filteredOptions"
				:input-props="inputProps"
				:should-render-suggestions="shouldRenderSuggestions"
				@input="onInputChange"
				@selected="onSelected"
				v-model="selected"
			>
				<template class="suggestions-container" slot-scope="{suggestion}">
					<div class="suggestion">
						{{suggestion.item}}
					</div>
				</template>
			</VueAutosuggest>
		</div>
	</div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest';
import topIngredients from "../static-data/top-ingredients.json";

export default {
	name: 'AddIngredient',
	data() {
		return {
			filteredOptions: [],
			inputProps: {
				class: "appearance-none block w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-0 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500",
				id: "search-ingredient",
				placeholder: "eg. Chicken Breast"
			},
			limit: 10,
			options: [{
				data: topIngredients
			}],
			selected: null
		}
	},
	methods: {
		onSelected(option) {
			this.selected = null;
			this.filteredOptions = [];
			this.$store.commit('addIngredient', option.item);
		},
		onInputChange(text) {

			if (text === '' || text === undefined) {
				return;
			}
		
			/* Full control over filtering. Maybe fetch from API?! Up to you!!! */
			const filteredData = this.options[0].data.map(item => item.name).filter(item => {
				return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
			}).slice(0, this.limit);
		
			this.filteredOptions = [{
				data: filteredData
			}];
		},
		shouldRenderSuggestions(size) {
			return size > 0;
		}
    },
	props: {},
	components: {
		VueAutosuggest
	}
}
</script>

<style>
.suggestion {
	padding: 0.75rem 1rem;
}

.suggestion:hover {
	background: #2b3e50;
}

#autosuggest {
	position: relative;
	width: 100%;
}

.autosuggest__results-container {
	display: block;
    position: absolute;
    width: 100%;
    z-index: 100;
}

.autosuggest__results {
	border-width: 1px;
    border-color: #2b3e50;
    background-color: #fff;
}
</style>
