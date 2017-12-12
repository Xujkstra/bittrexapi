<template>
<div class="layout-main layout-main-test">
  
</div>
</template>

<script>
import _ from 'lodash'
import { throttling, debounce } from 'utils/throttling'
export default {
  methods: {
    hello() {
      console.log('hello')
    }
  },
  mounted() {
    // window.addEventListener('scroll', _.debounce(this.hello, 100))
    window.addEventListener('scroll', debounce(this.hello, 100))
    // window.addEventListener('scroll', _.throttle(this.hello, 1000))
  }
}
</script>

<style>
.layout-main-test {
  height: 10000px;
  background: aqua;
}
</style>
