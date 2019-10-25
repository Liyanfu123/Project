<template>
  <div class="el__element">
    <el-container>
      <el-header><Top></Top></el-header>
      <el-container style="background: #f0f2f5;height: 100%">
        <div>
          <el-aside width="200px"><Nabar></Nabar></el-aside>
        </div>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
import Nabar from "../../components/nabar/Nabar";
export default {
  name: "Comment",
  components: {
    Top,
    Nabar
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
