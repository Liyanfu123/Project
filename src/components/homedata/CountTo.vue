<template>
  <div id="ct">
    <el-col :span="5">
      <el-card shadow="always">
        <div class="label-text">
          <div>
            <img src="../../icons/people.svg" alt="" />
          </div>
          <div>
            <div class="tit">New Visits</div>
            <div class="cto">
              <countTo
                  :startVal="startVal"
                  :endVal="visits"
                  :duration="dur">
              </countTo>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <div class="label-text">
          <div>
            <img src="../../icons/news.svg" alt="" />
          </div>
          <div>
            <div class="tit">Messages</div>
            <div class="cto">
              <countTo
                  :startVal="startVal"
                  :endVal="messages"
                  :duration="dur">
              </countTo>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <div class="label-text">
          <div>
            <img src="../../icons/money.svg" alt="" />
          </div>
          <div>
            <div class="tit">Purchases</div>
            <div class="cto">
              <countTo
                  :startVal="startVal"
                  :endVal="purchases"
                  :duration="dur">
              </countTo>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <div class="label-text">
          <div>
            <img src="../../icons/car.svg" alt="" />
          </div>
          <div>
            <div class="tit">Shopping</div>
            <div class="cto">
              <countTo
                  :startVal="startVal"
                  :endVal="shopping"
                  :duration="dur">
              </countTo>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
  import  countTo from"vue-count-to"
export default {
  name: "CountTo",
  components: {countTo},
  props: {},
  data() {
    return {
      list:[],
      visits:0,
      messages:0,
      purchases:0,
      shopping:0,
      dur:1000,
      startVal: 0, // 起始数字
      endVal: 0, //  结束数字
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/homeData")
        .then(res => {
          console.log(res);
          this.list=res.data
          this.visits=res.data.visits
          this.messages=res.data.messages
          this.purchases=res.data.purchases
          this.shopping=res.data.shopping
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCity();
    console.log(this.$store.state.citys);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#ct {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .label-text {
    display: flex;
    justify-content: space-around;
  }
  .tit{
    color: #ccc;
  }
  .cto{
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    color: gray;
  }
}
</style>
