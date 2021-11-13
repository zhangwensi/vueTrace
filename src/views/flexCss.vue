<template>
  <div>
    <h1>flex布局1</h1>
    <div class="box1">
      <div class="zbox">
        <div class="img">头像</div>
        <div class="title">标题</div>
        <p class="info">说明</p>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
    <h1>flex布局2</h1>
    <div class="box2">
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
</template>

<script>
export default {
  name:'flexCss',
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>


<style lang="scss" scoped>
.box1 {
  height: 180px;
  width: 300px;
  display: flex;
  background: salmon;
  justify-content: space-evenly;
  align-items: center;
  > div {
    border: 1px solid #000;
    width: 80px;
    height: 100px;
    padding: 8px;
    text-align: center;
    overflow: hidden;
    font-size: 10px;
  }
  .img {
    width: 54px;
    height: 53px;
    background: rebeccapurple;
    margin: 0 auto;
  }
}
.box2 {
  width: 400px;
  height: 400px;
  background: coral;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100px;
    height: 100px;
    border: 1px solid gold;
  }
}
</style>
