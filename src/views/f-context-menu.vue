<script setup>
import {computed} from "vue";

const props = defineProps({
	data: {
		type:Array,
		default: []
	},
	pos: {
		type:Object,
		default: {}
	}
})

const menuStyle = computed(() => {
	const {pos} = props
	console.log(props)
	return {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
	}
})

</script>

<template lang="pug">
.f-context-menu(:style="menuStyle")
	.f-context-men-item(v-for="item in data")
	a-button(type="primary" ) demo
</template>

<style scoped lang="less">
.f-context-menu {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 5px;
	background: #fff;
}
</style>
