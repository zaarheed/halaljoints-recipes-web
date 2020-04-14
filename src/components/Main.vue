<template>
	<main class="container mx-auto">
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
	methods: {},
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
