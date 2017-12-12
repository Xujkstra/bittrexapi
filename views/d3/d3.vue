<template>
<div>
<p></p>
</div>
</template>

<style>
.path {
	animation: dash .4s linear infinite;
}	

.path-2 {
	animation: dash .4s .2s linear infinite;
}

@keyframes dash {
	0% {
		stroke: #FFF;
	}
	50% {
		stroke: #FFF;
	}
	51% {
		stroke: #889399;
	}
  100% {
  	stroke: #889399;
  }
}
</style>

<script>
import * as d3 from 'd3'
export default {
	methods: {
		enter() {
			const p = d3.select("#app")
				.selectAll("p")
				.data([4, 8, 12, 16, 20, 24])
				.text(d => {
					console.log(d)
					return `I am Number ${d}`
				})

			p.enter()
				.append("p")
				.text("Hello D3")

		},
		body() {
			d3.select("body")
				.transition()
				.style("background-color", "black")
		},
		style() {
			d3.selectAll("p")
				.transition()
				.style("background-color", () => `hsl(${Math.random() * 360}, 100%, 50%)`)
				.style("color", (d, i) => {
					return i % 2? "#FFF": "#000"
				})
				.style("font-size", (d, i) => Math.max(i, 16) + "px")
				.style("margin", () => 10 + "px")

		}
	},
	mounted() {
		this.enter()
		this.$nextTick(() => {
			this.style()
		})
	}
}
</script>