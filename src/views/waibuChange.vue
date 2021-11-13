<template>
  <div>
    <h2>外部插件数字的滚动</h2>
    <div style="width:320px;">
      <DigitRoll :rollDigits="digits" />
    </div>
  </div>
</template>

<script>
import DigitRoll from '@huoyu/vue-digitroll'
export default {
  name: 'waibuChange',
  components:{DigitRoll},
  data () {
    return {
      digits: 789524
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>

