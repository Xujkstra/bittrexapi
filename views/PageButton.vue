<template>
	<div class="p-button">
		<h1 class="header">按钮组件</h1>
		<div class="title">普通按钮</div>
		<section>
			<div class="btn-group">
				<x-button>Default</x-button>
				<x-button type="danger">Danger</x-button>
				<x-button type="disabled">Disabled</x-button>
				<x-button type="orange">Orange</x-button>
			</div>
		</section>
		<div class="title">线框按钮</div>
		<section>
			<div class="btn-group">
				<x-button bordered>Default</x-button>
				<x-button type="danger" bordered>Danger</x-button>
				<x-button type="orange" bordered>Orange</x-button>
			</div>
		</section>
		<div class="title">Loading按钮</div>
		<section>
			<div class="btn-group">
				<x-button loading>Loading</x-button>
				<x-button type="danger" loading loadingText="我正在加载中">Loading</x-button>
				<x-button type="orange" loading loadingText="定制化加载文本">Loading</x-button>
			</div>
		</section>
		<div class="title">文本按钮</div>
		<section>
			<div class="btn-group">
				<x-button text>Text</x-button>
			</div>
		</section>
	</div>
</template>

<script>
import xButton from 'components/Button/Button.vue'
export default {
	components: {
		xButton
	}
}
</script>

<style>
.p-button {
	width: 800px;
	margin: 50px auto;
}

.header {
	font-size: 24px;
	color: #000;
	text-align: center;
}

.title {
	margin-bottom: 16px;
}

section {
	margin-bottom: 40px;
}

.btn-group {
	display: flex;
	justify-content: space-between;
}
</style>