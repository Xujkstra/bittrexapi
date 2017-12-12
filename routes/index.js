import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/button',
		component: () => import(/* webpackChunkName: "Xu" */'src/PageButton.vue')
	}, {
		path: '/switch',
		component: () => import(/* webpackChunkName: "Xu" */'src/PageSwitch.vue')
	}, {
		path: '/d3',
		component: () => import(/* webpackChunkName: "Demo" */'src/d3/d3.vue')
	}, {
		path: '/demo',
		component: () => import(/* webpackChunkName: "Demo" */'src/demo/Remove.vue')
	}, {
		path: '/market',
		component: () => import(/* webpackChunkName: "Market" */'src/market/Market.vue')
	}, {
		path: '/cal',
		component: () => import(/* webpackChunkName: "Calculator" */'src/calculator/Calculator.vue')
	}, {
		path: '/video',
		component: () => import(/* webpackChunkName: "Video" */'src/Video/Video.vue')
	}, {
		path: '',
		component: () => import(/* webpackChunkName: "Home" */'src/coach/Index.vue')
	}, {
		path: '/drag',
		component: () => import(/* webpackChunkName: "Drag" */'src/drag/Drag.vue')
	}, {
		path: '/nine',
		component: () => import(/* webpackChunkName: "Nine" */'src/nine/Nine.vue')
	}, {
		path: '/font',
		component: () => import(/* webpackChunkName: "Font" */'src/font/Font.vue')
	}, {
		path: '/number',
		component: () => import(/* webpackChunkName: "Number" */'src/number/Number.vue')
	}, {
		path: '/2048',
		component: () => import(/* webpackChunkName: "Game" */'src/2048/Game.vue')
	}, {
		path: '/test',
		component: () => import(/* webpackChunkName: "Test" */'src/test/Test.vue')
	}, {
		path: '/canvas',
		meta: {
			title: 'Canvas'
		},
		component: () => import(/* webpackChunkName: "Canvas" */'src/canvas/Canvas.vue')
	}
]

export default new VueRouter({
	routes
})