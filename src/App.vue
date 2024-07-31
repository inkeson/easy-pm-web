<script setup>
</script>

<template lang="pug">
a-button(type="primary") hello
router-view
</template>

<style>
::-webkit-scrollbar {
	z-index: 50;
	width: 5px;
	height: 5px;
	background-color: rgba(0,0,0,0);
}
::-webkit-scrollbar-track {
	background-color: rgba(0, 0, 0, 0);
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	background-color: #b5b1b1;
}

:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;
	color-scheme: light dark;
	color: #333333;
	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

textarea {
	word-break: break-all;
}

body {
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
#app {
	height: 100vh;
	width: 100vw;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 12px;
	overflow: hidden;
}
</style>
