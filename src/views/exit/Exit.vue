<template>
  <div style="position: relative;height: 689px">
    <div id="exit">
      <div style="font-weight: bold;font-size: 18px">期待您的下次光临</div>
      <div style="margin-top: 20px;text-align: center">
        <el-button type="primary" @click="Signout">确认退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exit",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    Signout(){
      this.$router.push("/login");
      this.$store.state.user =''  //注销用户名
      this.$store.state.pass = ''  //注销密码
      localStorage.removeItem('user')
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
#exit {
 display: inline-block;
  position: absolute;
  top: 25%;
  left: 48%;
}
</style>
