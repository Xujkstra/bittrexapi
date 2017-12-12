<template>
<div class="layout-main-font">
  <div class="layout-body-words">
    <p ref="text" :style="family">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quos soluta aliquid reprehenderit recusandae, fuga non quas impedit mollitia repudiandae quasi est at atque earum eveniet possimus culpa dolorem itaque!</p>
    <p :style="family">一地在要工上是中国同和的有人我主产不为这民了发以经</p>
    <p :style="family">1234567890</p>
  </div>
  <div class="layout-body-operation">
    <p>选择字体</p>
    <div class="checkbox">
      <label for="yahei">微软雅黑</label><input type="checkbox" name="font" id="yahei" value="Microsoft Yahei" v-model="font">
      <label for="pingfang">PingFang</label><input type="checkbox" name="font" id="pingfang" value="PingFang SC"  v-model="font">
      <label for="dq">冬青</label><input type="checkbox" name="font" id="dq" value="Hiragino Sans GB"  v-model="font">
      <label for="helvetical">黑体</label><input type="checkbox" name="font" id="helvetical" value="Helvetica" v-model="font">
      <label for="system">System-UI</label><input type="checkbox" name="font" id="system" value="system-ui" v-model="font">
    </div>
    <div class="input-area">
      <label for="input">输入字体:</label><input type="text" class="input" v-model="value" @keyup.enter="add">
    </div>
    <div class="list">
      <span v-for="(item, idx) in font" :key="idx" class="font-item" @click="remove(idx)">
        {{item}}
      </span>
    </div>
  </div>
</div>
</template>

<style src="./font.scss" lang="scss"></style>

<script>
export default {
  data() {
    return {
      font: [],
      value: ''
    }
  },
  computed: {
    family() {
      return {
        fontFamily: this.font.join(',')
      }
    }
  },
  methods: {
    remove(idx) {
      this.font.splice(idx, 1)
    },
    add() {
      this.font.push(this.value)
      this.value = ''
    }
  }
}
</script>