<template>
  <div>
    <div id="cont-left">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo cont-ul"
        background-color="#344055"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 首页-->
        <el-menu-item index="1" @click="home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!--        分页表格-->
        <el-menu-item index="2" @click="paging">
          <i class="el-icon-menu"></i>
          <span slot="title">分页表格</span>
        </el-menu-item>
        <!--        标签页-->
        <el-menu-item index="3" @click="tabs">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
        <!--        图片上传-->
        <el-menu-item index="4" @click="pictures">
          <i class="el-icon-upload2"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
        <!--        已发表-->
        <el-menu-item index="5" @click="publish">
          <i class="el-icon-check"></i>
          <span slot="title">已发表</span>
        </el-menu-item>
        <!--        发布文章-->
        <el-menu-item index="6" @click="article">
          <i class="el-icon-document"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <!--        统计-->
        <el-menu-item index="7" @click="census">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <!--        导出excel-->
        <el-menu-item index="8" @click="excel">
          <i class="el-icon-setting"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
        <!--        退出系统-->
        <el-menu-item index="9" @click="exit">
          <i class="el-icon-error"></i>
          <span slot="title">退出系统</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nabar",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/home");
    },
    paging() {
      this.$router.push("/paging");
    },
    tabs() {
      this.$router.push("/tabs");
    },
    pictures() {
      this.$router.push("/pictures");
    },
    publish() {
      this.$router.push("/publish");
    },
    //发布文章
    article() {
      this.$router.push("/article");
    },
    //统计
    census() {
      this.$router.push("/census");
    },
    //导出Excel
    excel() {
      this.$router.push("/excel");
    },
    //退出系统
    exit() {
      this.$router.push("/exit");
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
#cont-left {
  width:200px;
  height: 100%;
  position: fixed;
  z-index: 6;
  .cont-ul{
    height: 100%;
  }
}
</style>
