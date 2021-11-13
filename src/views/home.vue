<template>
  <div class="mulu">
    <h1>自用组件</h1>
    <ul>
      <li v-for="(items,index) in listArr" :key="index"><a @click="go(items.routerPath)">{{items.routerTitle}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'home',
  data() {
    return {
      listArr:[
        {routerTitle:'1、数字自动翻转',routerPath:'/numberChange'},
        {routerTitle:'2、外部插件数字自动翻转',routerPath:'/waibuChange'},
        {routerTitle:'3、弹性布局',routerPath:'/flexCss'},
        {routerTitle:'4、上传下载组件',routerPath:'/upload'},
        {routerTitle:'5、数字滚动组件',routerPath:'/changeNumer'}
      ]
    }
  },
  methods: {
    go(val){
      let routerJump = this.$router.resolve({path:val})
      window.open(routerJump.href,'_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.mulu{
  padding-left: 50%;
  transform: translateX(-80px);
}
</style>
