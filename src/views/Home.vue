<template>
  <div id="Label">
    <div style="width: 100%;">
      <countTo></countTo>
      <div style="background: #fff;padding-top: 25px;margin-top: 40px">
        <brokenLine></brokenLine>
      </div>
      <div class="rrh-data">
        <radar></radar>
        <ring></ring>
        <histogram></histogram>
      </div>
      <div class="orderData ">
        <tables style="margin-right: 1%"></tables>
        <div class="task">
          <task></task>
        </div>
        <div class="pro">
          <div>
            <img src="../icons/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
          </div>
          <ProgressBar></ProgressBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountTo from "../components/homedata/CountTo";
import BrokenLine from "../components/homedata/BrokenLine";
import Radar from "../components/homedata/Radar";
import Ring from "../components/homedata/Ring";
import Histogram from "../components/homedata/Histogram";
import Tables from "../components/homedata/Tables";
import Task from "../components/homedata/Task";
import ProgressBar from "../components/homedata/ProgressBar";
export default {
  name: "Home",
  components: {
    CountTo,
    BrokenLine,
    Radar,
    Ring,
    Histogram,
    Tables,
    Task,
    ProgressBar
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

<style scoped lang="scss">
#Label {
  display: flex;
  justify-content: space-around;
  .label-text {
    display: flex;
    justify-content: space-around;
  }
  .rrh-data {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
  .orderData {
    display: flex;
    width: 100%;
    margin-top: 40px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .task{
      width: 24%;
      background: #fff;
      margin-right: 1%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .pro{
      width: 24%;
      background: #ffffff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      img{
        width: 322px;
      }
    }
  }
}
</style>
