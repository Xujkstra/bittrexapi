<template>
	<button class="x-button" @click="$emit('click')" :class="[className, {loading: loading}]" :disabled="type==='disabled'">
		<slot v-if="!loading">Button</slot>
		<template v-if="loading">{{loadingText}}</template>	
	</button>
</template>

<style lang="scss" src="./button.scss"></style>

<script>
export default {
	props: {
		type: {
			default: 'primary',
			type: String
		},
		bordered: {
			default: false,
			type: Boolean
		},
		text: {
			default: false,
			type: Boolean
		},
		loading: {
			default: false,
			type: Boolean
		},
		loadingText: {
			default: '加载中',
			type: String
		},
		disabled: {
			default: false,
			type: Boolean
		}
	},
	computed: {
		className() {
			if(this.bordered) {
				return `x-button__${this.type}-bordered`;
			}
			if(this.text) {
				return `x-button__${this.type}-text`;
			}
			return `x-button__${this.type}`;
		}
	}
}
</script>