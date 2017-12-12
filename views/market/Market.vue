<template>
  <div class="market">
    <XButton class="open" @click="open">开</XButton>
  </div>  
</template>

<script>
import XButton from 'components/Button/Button.vue'
  export default {
    components: {
      XButton
    },
    data() {
      return {
        
      }
    },
    methods: {
      open() {
        setTimeout(() => {
          window.open('/#/cal')
        }, 1500)
      }
    }
  }
</script>