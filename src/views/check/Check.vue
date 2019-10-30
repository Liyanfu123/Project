<!-- 查看文章-->
<template>
  <div>

    <div><el-button type="primary" @click="Return">返回</el-button></div>
    <div>
      <div style="text-align: center">
       <div style="font-size: 20px;font-weight: bold">{{ list.title }}</div>
        <div style="margin-top: 30px">摘要：{{list.abstract}}</div>
        <div style="margin-top: 20px;color: #cccccc">发表于：{{list.date}}</div>
      </div>
    </div>
    <div style="background: #fff;margin-top: 20px">
        {{list.text}}
    </div>

  </div>
</template>

<script>
export default {
  name: "Check",
  components: {},
  props: {},
  data() {
    return {
      list:{},
      id:''
    };
  },
  methods: {
    getlist() {
      this.$axios
          .req("/api/article/article", {_id:this.id})
          .then(res => {
            this.list=res.data;
            this.list.date = this.$dayjs(this.list.date).format("YYYY年MM月DD日 HH时mm分ss秒");
          })
          .catch(arr =>{
            console.log(arr)
          })
    },
    //返回按钮，返回到发布页
    Return(){
      this.$router.push("/publish")
    }
  },
  mounted() {
    this.id =this.$route.query.id;
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
