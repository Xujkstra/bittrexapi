<template>
	<div class="remove-box">
		<x-button class="button-add" @click.native="add">Add A Item.</x-button>
		<x-button class="button-toggle" @click="toggle">Toggle a Div</x-button>
		<div class="card">
			<div class="card-content"></div>
			<div class="card-line middle"></div>
			<div class="card-line bottom"></div>
		</div>
		<div class="card">
			<div class="card-content"></div>
			<div class="card-line middle"></div>
			<div class="card-line bottom"></div>
		</div>
		<div class="card">
			<div class="card-content"></div>
			<div class="card-line middle"></div>
			<div class="card-line bottom"></div>
		</div>
		<div class="test" @transitionend="hook" :style="style">Test</div>
		<div class="list">
			<template v-for="(item, idx) in list">
				<transition name="delete">
					<div
					class="remove-item"
					@click="removeItem(idx)"
					@transitionend="divhook(idx)"
					:key="idx"
					:style="{backgroundColor: item.backgroundColor}"
					v-if="item.show">
						{{item.id}}
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script>
import * as d3 from 'd3'
import XButton from 'components/Button/Button.vue'
export default {
	components: {
		XButton
	},
	data() {
		return {
			list: [],
			id: 0,
			height: 0
		}
	},
	methods: {
		removeItem(idx) {
			this.list.splice(idx, 1)
		},
		add() {
			console.log('add')
			this.list.push({
				id: ++this.id,
				show: false,
				backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
			})
			this.$nextTick(() => {
				this.$set(this.list, this.list.length -1, {
					id: this.id,
					show: true,
					backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
				})
			})
		},
		toggle() {
			this.height = this.height? 0: 100
		},
		hook() {
			console.log('transition ended')
		},
		divhook(idx) {

		}
	},
	computed: {
		style() {
			return {
				height: this.height + 'px'
			}
		}
	}
}
</script>

<style lang="scss">
	.button-add {
		margin-bottom: 20px;
	}
	.test {
		overflow: hidden;
		width: 100px;
		height: 100px;
		color: #fff;
		text-align: center;
		line-height: 100px;
		background: #000;
		transition: height .15s ease-in-out;
	}
	.card {
		position: relative;
		width: 400px;
		height: 300px;
		margin: 0 auto 40px;
		.card-content {
			position: relative;
			width: 400px;
			height: 300px;
			background: white;
			box-shadow: 0 2px 8px 0 rgba(132, 133, 133, .1);
			z-index: 10;
		}
		.card-line {
			position: absolute;
			display: block;
			left: 0;
			right: 0;
			bottom: -10px;
			top: 10px;
			box-shadow: 0 2px 8px 0 rgba(132, 133, 133, .1);
			z-index: 9;
			background: white;
			&.bottom {
				top: 20px;
				bottom: -20px;
				z-index: 8;
				background: white;
			}
		}

	}
	.list {
		/*background: #000;*/
		transition: height .15s ease-in-out;
	}
	.remove-box {
		width: 800px;
		margin: 50px auto;
		background: #FAFAFA;
	}
	.remove-item {
		font-size: 24px;
		width: 100%;
		height: 100px;
		margin-bottom: 30px;
		color: #fff;
		text-align: center;
		line-height: 100px;
	}
	.delete-enter,
	.delete-leave-to {
		opacity: 0;
		height: 0;
		/*transform: translate3d(-50%, -10px, 0) scale3d(.95, .95, 1);*/
	}

	.delete-enter-active,
	.delete-leave-active {
		transition: all .15s ease;
	}
</style>