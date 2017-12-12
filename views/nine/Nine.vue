<template>
<div class="container">
  <div
    v-for="n in 9"
    :key="n"
    class="grid"
    :class="{active: n === index}">{{n}}</div>
</div>  
</template>

<script>
export default {
  data() {
    return {
      row: 1,
      column: 1,
      matrix: [[1,2,3],[4,5,6],[7,8,9]]
    }
  },
  methods: {
    handleInput(e) {
      if([38, 87].indexOf(e.which) > -1) { // ↑
        this.row = Math.max(this.row - 1, 0)
      } else if([39, 68].indexOf(e.which) > -1) { // →
        this.column = Math.min(this.column + 1, 2)
      } else if([40, 83].indexOf(e.which) > -1) { // ↓
        this.row = Math.min(this.row + 1, 2)
      } else if([37, 65].indexOf(e.which) > -1) { // ←
        this.column = Math.max(this.column - 1, 0)
      }
    }
  },
  created() {
    window.addEventListener('keydown', this.handleInput, false)
  },
  computed: {
    index() {
      return this.matrix[this.row][this.column]
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown, this.handleInput')
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.container {
  width: 33vw;
  height: 33vh;
  background: linear-gradient(135deg, #c7e5ec, #aed2f7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.grid {
  position: absolute;
  width: 33vw;
  height: 33vh;
  color: #FFF;
  font-size: 60px;
  line-height: 33vh;
  text-align: center;
}
.grid.active {
  filter: grayscale(50%);
}
.grid:first-child {
  position: absolute;
  background: #000;
  bottom: 100%;
  right: 100%;
}
.grid:nth-child(2) {
  position: absolute;
  background: #F00;
  bottom: 100%;
  left: 0;
}
.grid:nth-child(3) {
  position: absolute;
  background: #0F0;
  bottom: 100%;
  left: 100%;
}
.grid:nth-child(4) {
  position: absolute;
  background: #00F;
  top: 0;
  right: 100%;
}
.grid:nth-child(5) {
  position: absolute;
  background: #FF0;
  top: 0;
  left: 0;
}
.grid:nth-child(6) {
  position: absolute;
  background: #0FF;
  top: 0;
  left: 100%;
}
.grid:nth-child(7) {
  position: absolute;
  background: #F0F;
  top: 100%;
  right: 100%;
}
.grid:nth-child(8) {
  position: absolute;
  background: #FFBFFB;
  top: 100%;
  left: 0;
}
.grid:nth-child(9) {
  position: absolute;
  background: #0FF0dd;
  top: 100%;
  left: 100%;
}
</style>