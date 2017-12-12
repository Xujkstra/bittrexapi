<template>
  <div class="grid">
    <div class="board">
      <div
        v-for="(item, idx) in box"
        class="board-item"
        :key="idx">
        <div class="content" v-show="item > 0">{{ item }}</div>
      </div>
    </div>
  </div>
</template>


<style src="./style.scss" lang="scss"></style>

<script>
import Grid from './grid'

export default {
  data() {
    return {
      grid: null,
      box: new Array(16).fill(0)
    }
  },
  computed: {
    row() {
      var array = [[], [], [], []]
      this.box.forEach((item, idx) => {
        array[Math.floor(idx / 4)][idx % 4] = item
      })
      return array
    },
    column() {
      var array = [[], [], [], []]
      this.box.forEach((item, idx) => {
        array[idx % 4][Math.floor(idx / 4)] = item
      })
      return array
    },
    allRendered() {
      return this.box.every(item => item > 0)
    }
  },
  methods: {

    startGame() {
      this.grid = new Grid(4)
      this.grid.init()
    },

    init() {
      this.renderGrid()
      this.$nextTick(() => {
        this.renderGrid()
      })
    },

    control(e) {
      if(e.which === 38) {
        this.moveUp()
      } else if(e.which === 37) {
        this.moveLeft()
      } else if(e.which === 30) {
        this.moveDown()
      } else if(e.which === 39) {
        this.moveRight()
      }
    },

    moveLeft() {
      console.log('moveLeft')
      if(this.canMoveLeft) {
        this.renderGrid()
      }
    },

    moveRight() {

    },

    moveUp() {

    },

    moveDown() {

    },

    renderGrid() {
      if(this.allRendered) return
      const num = Math.random() > 0.5 ? 2 : 4
      const index = this.getRandomEmptyIndex()
      this.$set(this.box, index, num)
    },
    getRandomEmptyIndex() {
      let index = 0
      while(true) {
        index = Math.floor(Math.random() * 16)
        if(this.box[index] === 0) {
          break;
        }
      }
      return index
    },
  },
  created() {
    this.startGame()
    document.addEventListener('keydown', this.control, false)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.control)
  }
}
</script>
