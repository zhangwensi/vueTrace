<template>
  <div class="upload-box">
    <el-upload
      class="upload-demo"
      :action="uploadInfo.action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      :file-list="fileList"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name:'confirom',
  props:{
    uploadInfo:{
      type: Object,
      default: ()=>{
        return {
          action: "https://jsonplaceholder.typicode.com/posts/", //上传地址
          multiple: true,  // 设置是否允许单次选取多个文件
          limit: 1 //限制上传文件数量
        }
      }
    }
  },
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],// 后台返回值
      logo:''
    }
  },
  methods: {
    handleRemove(file) {
      //处理移除的文件信息
      console.log(file);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + this.fileList.length} 个文件`);
    },
    beforeUpload(file) {
      const isImg = /^image\/\w+$/i.test(file.type)
      if (!isImg) {
        this.$message.error('只能上传 JPG、PNG、GIF 格式!')
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-box {
    width: 300px;
    border: 1px solid #000;
    padding: 20px;
    text-align: center;
}
</style>

