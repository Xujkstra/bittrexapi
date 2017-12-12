<template>
<div :class="$style.container" @mousemove="drag" @mouseup="dragEnd">
  <div
    ref="dragElement"
    :class="$style.drag"
    :style="style">
    <div :class="$style.placeholder" @mousedown="dragStart">
      <div @click="show">show list</div>
    </div>
    <ol :class="$style.list" :style="styleList">
      <li
        :class="$style.listItem"
        v-for="n in 9"
        :key="n">{{n}}</li>
    </ol>
  </div>  
</div>  
</template>

<script>

export default {
  name: 'demo-drag',
  data() {
    return {
      isDraging: false,
      posX: 0,
      posY: 0,
      X: 30,
      Y: 30,
      showList: false
    }
  },
  methods: {
    dragStart(e) {
      this.isDraging = true
      this.posX = e.clientX
      this.posY = e.clientY
    },
    drag(e) {
      if(!this.isDraging) return
      let dragElement = this.$refs.dragElement
      this.X = dragElement.offsetLeft
      this.Y = dragElement.offsetTop
      let nowX = e.clientX, nowY = e.clientY
      let disLeft = nowX - this.posX,
          disTop = nowY - this.posY
      this.X = this.X + disLeft
      this.Y = this.Y + disTop
      this.posX = nowX
      this.posY = nowY
    },
    dragEnd(e) {
      this.isDraging = false
    },
    show() {
      this.showList = !this.showList
    }
  },
  mounted() {
    document.title = 'Drag'
  },
  computed: {
    style() {
      return {
        left: this.X + 'px',
        top: this.Y + 'px'
      }
    },
    styleList() {
      return {
        maxHeight: this.showList? '300px': '0',
        boxShadow: this.showList? '0 1px 1px 1px #C0D0E0': 'none'
      }
    }
  }
}
</script>

<style module>
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #c7e5ec, #aed2f7);
  position: relative;
}
.drag {
  width: 200px;
  height: 60px;
  position: absolute;
  background: #FFF;
}
.placeholder {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: move;
  box-shadow: 0 1px 1px 1px #C0D0E0;
  border-radius: 3px;
}
.list {
  position: absolute;
  margin: 10px auto;
  left: 0;
  right: 0;
  top: 100%;
  max-height: 300px;
  overflow-y: scroll;
  list-style: none;
  background: #FFF;
  border-radius: 3px;
  padding: 0;
  transition: max-height 1s ease;
}

.listItem {
  height: 30px;
  width: 100%;
  padding-left: 20px;
  line-height: 30px;
  color: #2d2d2d;
  font-size: 24px;
  border-bottom: 1px solid #f1f1f1;
}
</style>