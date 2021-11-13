<template>
  <div>
    <h2>数字翻转案例</h2>
    <div id="num-roll" class="myroll">111111</div>
    <button @click.prevent="changeNumber">改变数字</button>
    <button @click.prevent="stopChange">停止数字</button>
  </div>
</template>

<script>
import DigitRoll from '../utils/digitRoll'
export default {
  name:'numberTrans',
  data() {
    return {
      data: 500,
      timer: null
    }
  },
  methods: {
    changeNumber() {
      let r1 = new DigitRoll({
        container:'#num-roll',
        width:6
      })
      let myhongbao = this.data
      if(this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(function () {
        console.log(myhongbao)
        myhongbao += parseInt(Math.random()*100)
        r1.roll(myhongbao)
      },3000)
    },
    stopChange() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.myroll {float: left;height: 40px;font-size: 38px;background: #fee; font-family: ledFont;}
.myroll .num{margin: 0 3px;}
</style>
