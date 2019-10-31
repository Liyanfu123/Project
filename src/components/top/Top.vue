<template>
  <div>
    <div id="top">
      <div>
        <span class="tit-text" style="margin-left: 40px">欢迎 {{user.user}},来到小梨后台管理系统</span>
      </div>
      <div style="display: flex;justify-content: space-between">
        <span class="tit-text" style="margin-right: 40px">{{hoursTip}}，亲爱的 {{user.user}}，上次登录时间：{{day}}</span>
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
      user:{},
      Times:'',    //记录当前时间与上次登录时间的时间差
      today:'',   //记录当前时间的凌晨的时间戳
      day:''     //格式化后的时间差
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
  mounted() {
    //登录时，显示登录用户的name
    this.user= JSON.parse(localStorage.getItem("user"))
    this.today =new this.$dayjs().hour(0).minute(0).second(0).millisecond(0)
    this.Times =Math.floor(this.$dayjs().diff(this.today)/1000/3600)
    //调整时间格式
    this.day= this.$dayjs(this.user.date).format("YYYY年MM月DD日 HH:mm:ss")
  },
  created() {
    this.getMycount();
  },
  filters: {},
  computed: {
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
