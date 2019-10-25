<template>
  <div>
    <div id="top">
      <div>
        <span class="tit-text" style="margin-left: 40px">欢迎 {{user}},来到小梨后台管理系统</span>
      </div>
      <div style="display: flex;justify-content: space-between">
        <span class="tit-text" style="margin-right: 40px">早上好，亲爱的 {{user}}，上次登录时间：2019/10/24</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {
    user(){
      return this.$store.state.user
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top {
  display: flex;
  line-height: 60px;
  justify-content: space-between;
  background: #2e5e85;
  position: fixed;
  width: 100%;
  z-index: 6;
  .tit-text{
    color: #fff;
    font-size: 18px;
  }
}
</style>
