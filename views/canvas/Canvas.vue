<template>
  <div class="layout-main-canvas">
    <h1 class="layout-title">Canvas Demo</h1>
    <canvas id="canvas" ref="canvas" @click="handleCanvasClick">
      Hello world
    </canvas>
  </div>
</template>

<style src="./style.scss"></style>

<script>
export default {
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const w = canvas.width
    const h = canvas.height
    const r = 10
    const bg = "#262626"

    let px = 10, py = 10
    
    let stepY = 2
    let stepX = 1
    let color = ["red", "yellow", "green", "blue"]
    let i = 0
    setInterval(() => {
      ctx.clearRect(0, 0, w, h)
      px += stepX
      py += stepY
      if(px + r >= w || px - r <= 0) {
        i ++
        stepX *= -1
      }
      if(py + r>= h || py - r <= 0) {
        i ++
        stepY *= -1
      }

      ctx.beginPath()
      ctx.arc(px, py, r, 0, Math.PI * 2)
      ctx.fillStyle = color[i % 4]
      ctx.fill()
    }, 10)

    setInterval(() => {
      
    })
  },
  methods: {
    handleCanvasClick(e) {
      console.log('click')
      console.log(e.offsetX, e.offsetY)
    }
  }
}
</script>