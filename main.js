require('./style/main.scss')

import Vue from 'vue'
import router from './routes'

router.beforeEach(( to, from, next) => {
	const { title } = to.meta
	if(title) {
		document.title = title
	}
	next()
})

new Vue({
	router
}).$mount('#app')
