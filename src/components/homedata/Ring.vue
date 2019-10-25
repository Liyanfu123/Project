<template>
  <div style="width: 33%;background: #fff;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);">
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "Ring",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/ringChat")
        .then(res => {
          console.log(res);
          Object.keys(res.data[0]).map(item => {
            this.chartData.columns.push(item);
          })((this.chartData.rows = res.data));
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
