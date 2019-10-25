<template>
  <div>
    <div v-for="(item,index) in pro" :key="index">
      <div style="margin-top: 20px">
        <div>{{item.name}}</div>
        <template>
          <div>
            <el-progress :percentage="item.progress *100" v-if="item.progress ===1" status="success"></el-progress>
          </div>
          <div >
            <el-progress :percentage="item.progress *100" v-if="item.progress !==1" status=""></el-progress>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  components: {},
  props: {},
  data() {
    return {
      pro:[]
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("/api/progress ")
        .then(res => {
          console.log(res);
          this.pro = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCity();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
