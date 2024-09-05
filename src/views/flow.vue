<script setup>
import {Graph, ToolsView, EdgeView} from '@antv/x6'
import {onMounted, createVNode, h, render, getCurrentInstance, shallowRef} from "vue";
import FContextMenu from "@/views/f-context-menu.vue";

const instance = getCurrentInstance()
const containerRef = shallowRef(null)
console.log(instance)
const menu = [
	{
		key: 'copy',
		label: '复制',
	},
	{
		key: 'paste',
		label: '粘贴',
	},
	{
		key: 'delete',
		label: '删除',
		type: 'danger',
	},
]

class ContextMenuTool extends ToolsView.ToolItem {
	timer = 0
	toggleContextMenu(visible, pos) {
		// ReactDom.unmountComponentAtNode(this.container)
		document.removeEventListener('mousedown', this.onMouseDown)
		if (visible && pos) {
			// ReactDom.render(
			// 	<Dropdown
			// 		open={true}
			// 		trigger={['contextMenu']}
			// 		menu={{ items: this.options.menu }}
			// 		align={{ offset: [pos.x, pos.y] }}
			// 	>
			// 		<span />
			// 	</Dropdown>,
			// 	this.container,
			const vnode = createVNode(FContextMenu, {
				data: this.options.menu,
				pos,
			})
			vnode.appContext = instance.appContext
			render(vnode, containerRef.value)
		}
		document.addEventListener('mousedown', this.onMouseDown)
	}

	onMouseDown = () => {
		this.timer = window.setTimeout(() => {
			this.toggleContextMenu(false)
		}, 200)
	}

	 onContextMenu({e}) {
		 console.log(e)
		if (this.timer) {
			clearTimeout(this.timer)
			this.timer = 0
		}
		this.toggleContextMenu(true, { x: e.clientX, y: e.clientY })
	}

	delegateEvents() {
		this.cellView.on('cell:contextmenu', this.onContextMenu, this)
		return super.delegateEvents()
	}

	 onRemove() {
		this.cellView.off('cell:contextmenu', this.onContextMenu, this)
	}
}

onMounted(() => {



	Graph.registerEdgeTool('contextmenu', ContextMenuTool, true)
	Graph.registerNodeTool('contextmenu', ContextMenuTool, true)

	const graph = new Graph({
		container: document.getElementById('container'),
		grid: true,
	})

	const source = graph.addNode({
		x: 180,
		y: 60,
		width: 100,
		height: 40,
		attrs: {
			body: {
				stroke: '#5F95FF',
				fill: '#EFF4FF',
				strokeWidth: 1,
			},
		},
		// tools: [
		// 	{
		// 		name: 'contextmenu',
		// 		args: {
		// 			menu,
		// 		},
		// 	},
		// ],
	})

	const target = graph.addNode({
		x: 320,
		y: 250,
		width: 100,
		height: 40,
		attrs: {
			body: {
				stroke: '#5F95FF',
				fill: '#EFF4FF',
				strokeWidth: 1,
			},
		},
		tools: [
			{
				name: 'contextmenu',
				args: {
					menu,
				},
			},
		],
	})

	graph.addEdge({
		source,
		target,
		attrs: {
			line: {
				stroke: '#A2B1C3',
				strokeWidth: 2,
			},
		},
		tools: [
			{
				name: 'contextmenu',
				args: {
					menu,
				},
			},
		],
	})
})


</script>

<template lang="pug">
.flow#container(ref="containerRef" )
</template>

<style scoped lang="less">
.flow {
	height: 100vh;
	width: 100vw;
}
</style>
