<template>
  <div>
    <div id="top">
      <div>
        <span class="tit-text" style="margin-left: 40px">欢迎 {{user}},来到小梨后台管理系统</span>
      </div>
      <div style="display: flex;justify-content: space-between">
        <span class="tit-text" style="margin-right: 40px">{{hoursTip}}，亲爱的 {{user}}，上次登录时间：2019/10/24</span>
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
    return {
      hoursTip:' ',
    };
  },
  methods: {
    getMycount:function(){
      let self=this;
      let date=new Date();
      if(date.getHours()>=6&&date.getHours()<10){
        self.hoursTip="早上好"
      }else if(date.getHours()>=10&&date.getHours()<13){
        self.hoursTip="上午好"
      }else if(date.getHours()>=13&&date.getHours()<17){
        self.hoursTip="下午好"
      }else if(date.getHours()>=17&&date.getHours()<22){
        self.hoursTip="晚上好"
      }else {
        self.hoursTip="夜深了该休息了~~~"
      }

    }
  },
  mounted() {},
  created() {
    this.getMycount();
  },
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
