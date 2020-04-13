<template>
	<div id="app">
		<div class="font-body lg:flex">
			<Header />
		</div>
	</div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
	name: 'app',
	components: {
		Header,
		Main
	}
}
</script>

<style>
</style>
