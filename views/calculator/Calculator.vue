<template>
<div class="layout-calculator">
  <div>
    <div>1BTC=${{btcPrice}}=¥{{btcPrice * rate}}</div>
    <div>1USD=¥{{rate}}</div>
  </div>
  <input type="text" placeholder="添加新币" v-model="newCoin"> <button @click="add">确定</button>
  <ul class="market-list" @mouseleave="columnNumber = -1">
    <li class="market-name">
      <span>Name</span>
      <span>High</span>
      <span>Low</span>
      <span>Last</span>
      <span>USD</span>
      <span>CNY</span>
    </li>
    <li class="market-item" v-for="item in resolvedList">
      <span @mouseenter="columnNumber = 1" :class="{hover: columnNumber === 1}">{{item.name}}</span>
      <span @mouseenter="columnNumber = 2" :class="{hover: columnNumber === 2}">{{item.high | fixed}}</span>
      <span @mouseenter="columnNumber = 3" :class="{hover: columnNumber === 3}">{{item.low | fixed}}</span>
      <span @mouseenter="columnNumber = 4" :class="{hover: columnNumber === 4}">{{item.last | fixed}}</span>
      <span @mouseenter="columnNumber = 5" :class="{hover: columnNumber === 5}">{{item.last * btcPrice | fixed}}</span>
      <span @mouseenter="columnNumber = 6" :class="{hover: columnNumber === 6}">{{item.last * btcPrice * rate | fixed}}</span>
    </li>
  </ul>
</div>  
</template>

<style src="./layout.scss" lang="scss"></style>

<script>
import XButton from 'components/Button/Button.vue'
import axios from 'axios'

const price = {
  'EBST': 1035,
  'ENG': 5870
}
export default {
  components: {
    XButton
  },
  data() {
    return {
      btc: {},
      list: [],
      coin: ['BCC','ETH','LTC','ETC','QTUM','OK','EMC2','OMG','CVC','STORJ','EBST','NAV', 'XVG', 'ENG'],
      rate: 6.625,
      columnNumber: -1,
      newCoin: ''
    }
  },
  filters: {
    fixed(value) {
      return value.toFixed(8)
    }
  },
  methods: {
    async getPrice() {
      const url = "/api/v2.0/pub/Markets/GetMarketSummaries"
      const params = { _: +new Date()}
      const { data } = await axios.get(url, { params })
      this.list = data.result
      return data
    },
    async getBtcPrice() {
      const url = "/api/v2.0/pub/currencies/GetBTCPrice"
      const { data } = await axios.get(url)
      this.btc = data.result
      return data
    },
    async getRatio() {
      const url = "http://api.fixer.io/latest?base=USD"
      const { data } = await axios.get(url)
      console.log(data)
      this.rate = data.rates.CNY
      return data
    },
    startTimer() {
      this.timer = setInterval(() => this.getPrice(), 5000)
    },
    add() {
      if(this.newCoin === '') return
      this.coin = this.coin.concat(this.newCoin)
      this.newCoin = ''
    }
  },
  computed: {
    btcMarket() {
      return this.list.filter(item => item.Market.BaseCurrency === 'BTC')
    },
    coinName() {
      return this.btcMarket.map(item => item.Market && item.Market.MarketCurrency)
    },
    coinList() {
      return this.btcMarket.filter(item => this.coin.indexOf(item.Market.MarketCurrency) > -1)
    },
    resolvedList() {
      return this.coinList.map(item => {
        const Market = item.Market
              ,Summary = item.Summary
        return {
          name: Market.MarketCurrency,
          low: Summary.Low,
          high: Summary.High,
          last: Summary.Last
        }
      })
    },
    btcPrice() {
      return this.btc.bpi && this.btc.bpi.USD.rate_float
    }
  },
  mounted() {
    document.title = '晓直播'
    this.getRatio()
    this.getBtcPrice()
    this.getPrice()
    this.startTimer()
  },
  beforeDestroy() {
    cleraInterval(this.timer)
  }
}
</script>