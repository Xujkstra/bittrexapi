<template>
  <div class="layout-main">
    <div class="input-group">
      <div class="input-item">
        <div class="center" @click="show">
          <div class="placeholder" v-show="!centerValue.value">请选择分拔中心</div>
          <div class="text" v-show="centerValue.value">{{centerValue.value}}</div>
        </div>
        <div class="center-list" v-show="showCenterList">
          <div class="center-item"
            v-for="(value, key) in center"
            @click="chooseCenter(key, value)"
            :key="key">
            {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>

<script>
import { center } from './data'
export default {
  data() {
    return {
      centerValue: {},
      showCenterList: false,
      center
    }
  },
  methods: {
    show() {
      this.showCenterList = true
    },
    chooseCenter(key, value) {
      this.centerValue = {key, value}
      this.showCenterList = false
    }
  }
}
</script>