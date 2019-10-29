<!--图片上传-->
<template>
  <div style="background: #fff;padding-left: 15px">
    <div class="tit"><span>支持拖拽</span></div>
    <div class="tit-text"><span style="margin-left: 30px">Element UI自带上传组件</span></div>
    <el-upload
      class="upload-demo"
      drag
      action="api/upload"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div class="tit"><span>支持裁剪</span></div>
    <div class="tit-text"><span style="margin-left: 30px">vue-image-crop-upload</span></div>
    <el-button type="primary" id="inpImg" @click="toggleShow">上传图片</el-button>
    <my-upload
        field="file"
        :width="300"
        :height="300"
        url="api/upload"
        :params="params"
        :headers="headers"
        v-model="show"
        :value.sync="show"
        img-format="png"
    ></my-upload>
  </div>
</template>

<script>
  import myUpload from "vue-image-crop-upload";
export default {
  name: "Pictures",
  components: {
     myUpload
  },
  props: {},
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      imgDataUrl: "",
      headers: {
        smail: "*_~"
      }
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  .tit{
    font-size: 25px;
    padding: 15px 0 0 0;
  }
  .tit-text{
    padding: 15px 15px 15px 0;
    margin: 15px 0 15px 0;
    width: 1160px;
    background:#eeeeee;
  }
  #inpImg{
    margin: 15px 0 50px 0;
  }
</style>
