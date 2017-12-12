<template>
<transition name="toast">
	<div class="x-toast" :class="className">
		{{msg}}
	</div>
</transition>
</template>

<style lang="scss" src="./toast.scss"></style>

<script>
export default {
	props: {
		type: {
			default: 'success',
			type: String
		},
		msg: {
			type: String
		}
	},
	computed: {
		className() {
			return `x-toast__${this.type}`
		}
	},
	mounted() {
		
	}
}
</script>