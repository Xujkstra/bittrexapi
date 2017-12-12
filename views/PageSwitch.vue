<template>
	<div class="p-switch">
		<h1 class="header">Switch</h1>
		<div class="title">开关</div>
		<button @click="show=!show">点我</button>
		<div class="circle"></div>
		<div class="box effect2"></div>
		<section>
			<div class="content">
				<x-switch />
			</div>
		</section>
		<x-toast msg="hello, x toast" type="warning" v-if="show"/>
	</div>
</template>

<script>
import XSwitch from 'components/Switch/Switch.vue'
import XToast from 'components/Toast/Toast.vue'

export default {
	components: {
		XSwitch,
		XToast
	},
	data() {
		return {
			show: false
		}
	}
}
</script>

<style>
.p-switch {
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

.circle {
	margin: 50px auto;
	width: 100px;
	height: 100px;
	background: #fff;
	/*border: 1px solid #00D078;*/
	border-radius: 100px;
	animation: shadow 2s ease infinite;
}

.box {
	width:70%;
	height:200px;
	background:cyan;
	margin:40px auto;
}

.effect2
{
  position: relative;
}
.effect2:before, .effect2:after
{
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 15px;
  left: 10px;
  width: 50%;
  top: 80%;
  max-width:300px;
  background: #777;
  -webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  box-shadow: 0 15px 10px #777;
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  transform: rotate(-3deg);
}
.effect2:after
{
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
  right: 10px;
  left: auto;
}

@keyframes shadow{
	0% {
		box-shadow:0 0 0 0 rgba(0,208,120,1);
	}
	70% {
		box-shadow:0 0 5px 10px rgba(0,208,120,0);
	}
	100% {
		box-shadow:0 0 0 0 rgba(0,208,120,0)
	}
}
</style>