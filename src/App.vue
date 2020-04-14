<template>
	<div id="app">
		<div class="font-body flex flex-col container mx-auto">
			<Header />
			<Main />
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
