<template>
  <div class="box">
    <div>
      设置目标数字：<el-input style="width:150px" v-model="realTime" placeholder="请输入数字"></el-input>
      <el-button type="primary" @click="changeArr">确认</el-button>
    </div>
    <!-- 数字区域 -->
    <div v-for="(item,index) in realArry" :key="index" class="container">
      <div class="real-time" :style="{transform: `translateY(-${item*98}px)`}">
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'changeNumer',
  data() {
    return {
      realTime: null,
      realArry:[]
    }
  },
  methods:{
    changeArr() {
      let num = ''
      for(let i =0;i<6;i++) {
        num += Math.floor(Math.random()*9+1)
      }
      this.realTime = num
      this.realArry = `${this.realTime}`.split('')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-left: 80px;
  .container {
    display: inline-block;
    width: 66px;
    height: 98px;
    background: linear-gradient(0deg,rgba(36,97,147,1),rgba(115,157,191,1));
    line-height: 96px;
    font-size: 60px;
    text-align: center;
    margin-right: 3px;
    overflow: hidden;
  }
  .real-time {
    transition: all 1s ease-out;
  }
  .real-time>div {
    width: 66px;
    height: 98px;
  }
}
</style>
