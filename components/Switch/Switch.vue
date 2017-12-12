<template>
<div class="x-switch" @click="toggle" :class="className">
	<div class="label"></div>
</div>
</template>

<style lang="scss" src='./switch.scss'></style>

<script>
export default {
	data() {
		return {
			on: false
		}
	},
	methods: {
		toggle() {
			this.on = !this.on
		}
	},
	computed: {
		className() {
			return this.on? 'on':'off'
		}
	}
}
</script>