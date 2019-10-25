<template>
  <div style="width: 50%">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="Order_No"> </el-table-column>
      <el-table-column prop="price" label="Price">
        <template slot-scope="scope"
          >￥{{ scope.row.price }}</template
        >
      </el-table-column>
      <el-table-column prop="status" label="Status">
        <template slot-scope="scope"
          ><el-tag type="danger" v-if="scope.row.status === 0">pending</el-tag>
          <el-tag type="success" v-if="scope.row.status === 1"
            >success</el-tag
          ></template
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Tables",
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("/api/orderData ")
        .then(res => {
          console.log(res);
          this.tableData= res.data
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
