<template>
  <div class="layout-main-number">
    <i-count-up
      :start="0"
      :end="120500"
      :decimals="0"
      :duration="2.5"></i-count-up>
  </div>
</template>

<style>
.layout-main-number {
  width: 1170px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: #E8F8FB;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .5);
  color: #000;
  font-size: 60px;
  text-align: center;
  line-height: 100vh;
  font-family: Open Sans;
}
</style>

<script>
import ICountUp from 'vue-countup-v2';
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      number: 0,
      final: 134
    }
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.number ++
        if(this.number >= this.final) {
          this.number = this.final
        }
      }, 10)
    }
  },
  created() {
    this.startTimer()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
