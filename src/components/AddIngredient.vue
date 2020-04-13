<template>
	<div class="flex flex-wrap mx-3 mb-6">
		<div class="w-full px-3">
			<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="search-ingredient">
				Enter ingredients you have available in your kitchen
			</label>

			<VueAutosuggest
				:limit="limit"
				:on-selected="onSelected"
				:suggestions="filteredOptions"
				:input-props="inputProps"
				@input="onInputChange"
			/>
			
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
				class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
				id: "search-ingredient",
				placeholder: "eg. Chicken Breast"
			},
			limit: 10,
			options: [{
				data: topIngredients
			}],
			selected: ''
		}
	},
	methods: {
		onSelected(option) {
			this.selected = option.item;
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
		}
    },
	props: {},
	components: {
		VueAutosuggest
	}
}
</script>

<style scoped>
</style>
