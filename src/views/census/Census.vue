<template>
  <div>
    <div style="width: 100%;display: flex;color: #fff;text-align: center">
      <!-- 今日发布-->
      <div style="width: 25%;background: #7CCABF;padding: 10px 0;position: relative">
        <span>今日发布</span>
        <div>{{sum}}</div>
        <div class="right-img"> <i class="el-icon-document-checked"></i></div>
      </div>
        <!-- 原创文章-->
      <div style="width: 25%;background: #E88A87;padding: 10px 0;position: relative">
        <span>原创文章</span>
        <div>{{amount}}</div>
        <div class="right-img"><i class="el-icon-document"></i></div>
      </div>
        <!--新留言-->
      <div style="width: 25%;background: #8375A3;padding: 10px 0;position: relative">
        <span>新留言</span>
        <div>3</div>
        <div class="right-img"><i class="el-icon-edit-outline"></i></div>
      </div>
        <!--新消息-->
      <div style="width: 25%;background: #9FCEC1;padding: 10px 0;position: relative">
        <span>新消息</span>
        <div>5</div>
        <div class="right-img"><i class="el-icon-chat-dot-round"></i></div>
      </div>
    </div>
    <div class="pie">
      <div class="pic1">
        <ve-pie :data="list1"></ve-pie>
      </div>
      <div class="pic2">
        <ve-ring :data="list2" :settings="chartSettingsour"></ve-ring>
      </div>
    </div>
    <div class="waterfall">
      <ve-waterfall :data="list3" :settings="chartSettingfall"></ve-waterfall>
    </div>
  </div>
</template>

<script>
  let _ = require("lodash");
export default {
  name: "Census",
  components: {},
  props: {},
  data() {
    // this.chartSettingcate = {
    //   dimension: "category",
    //   metrics: "num"
    // };
    this.chartSettingsour = {
      dimension: "source",
      metrics: "num",
      roseType: "radius"
    };
    this.chartSettingfall = {
      dimension: "date",
      metrics: "num"
    };
    return {
      sum: 0,      //定义一个今日发表的数量
      amount: 0,    //定义一个原创的接收的量
      list: [],
      //第一个饼图
      list1: {
        columns: ["category", "num"],
        rows: []
      },
      //第二个饼图
      newcate: [],
      list2: {
        columns: ["source", "num"],
        rows: []
      },
      //第三个柱状图
      newsour: [],
      list3: {
        columns: ["date", "num"],
        rows: []
      }
    };
  },
  methods: {
    //获取到所有文章的数据
    getlist() {
      this.$axios
          .req("api/article/allArticle")
          .then(res => {
            this.list = res.data;
            // console.log(res);
            this.getcategory();
            this.getsource();
            this.getdate();
          })
          .catch(arr => {
            console.log(arr);
          });
    },
    //第一个饼图的
    getcategory() {
      let cate = _.groupBy(this.list, "category");
      let num = 0;
      let category = "";
      let exist = {};
      for (let i in cate) {
        num = cate[i].length;
        category = i;
        exist = {
          category: category,
          num: num
        };
        this.list1.rows.push(exist);
      }
    },
    //第二个饼图的
    getsource() {
      let sour = _.groupBy(this.list, "source");
      this.amount = sour["原创"].length;
      let num = 0;
      let source = "";
      let exists = {};
      for (let i in sour) {
        num = sour[i].length;
        source = i;
        exists = {
          source: source,
          num: num
        };
        this.list2.rows.push(exists);
      }
    },
    //第三个柱状图的
    getdate() {
      this.list.map(item => {
        item.date = this.$dayjs(item.date).format("YYYY年MM月DD日");
      });
      let dat = _.groupBy(this.list, "date");
      let time = Date.now();
      time = this.$dayjs(time).format("YYYY年MM月DD日");
      this.sum = dat[time].length;
      let num = 0;
      let date = "";
      let existes = {};
      for (let i in dat) {
        dat[i].map(item => {
          num = dat[i].length;
          date = item.date;
        });
        existes = {
          date: date,
          num: num
        };
        this.list3.rows.push(existes);
        console.log(this.list3, 33);
      }
    }
  },
  mounted() {
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  .right-img{
   position: absolute;
    top: 20px;
    right: 40px;
  }
  .pie {
    display: flex;
    margin-top: 25px;
  }
  .pic1 {
    width: 50%;
  }
  .pic2 {
    width: 50%;
  }
</style>
