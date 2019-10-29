<!--  导出excel-->
<template>
  <div>
    <div style="width: 200px;margin-bottom: 10px">
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
    </div>
    <el-table
        :data="arr.slice(allPages * (nowPages - 1), nowPages * allPages)"
        style="width: 100%"
    >
      <!--      名称-->
      <el-table-column label="名称" width="300" align="center" >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
        </template>
      </el-table-column>
      <!--      商品编号-->
      <el-table-column label="商品编号" width="300" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.GOODS_SERIAL_NUMBER
          }}</span>
        </template>
      </el-table-column>
      <!--       原价-->
      <el-table-column label="原价" width="250" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
        </template>
      </el-table-column>
      <!--      现价-->
      <el-table-column label="现价" width="250" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" align="center">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="primary"
              @click="edit(scope.$index, scope.row)"
          >
            导出xls</el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="del(scope.$index, scope.row)"
          >
            导出csv</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          layout="total,sizes,prev,pager,next,jumper"
          :total="arr.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Paging",
    components: {},
    props: {},
    data() {
      return {
        input: "", // 搜索的关键字
        tableData: [],
        arr: [], // 这个数组里面的数据都是过滤之后的
        currentPage: 1,
        allPages: 800,
        nowPages: 1,
      };
    },
    methods: {
      getCity() {
        this.$axios
            .req("/api/tableData ")
            .then(res => {
              console.log(res);
              this.tableData = res.data;
              this.arr = res.data;
            })
            .catch(err => {
              console.log(err);
            });
      },
      //分页 页数
      handleSizeChange(val) {
        this.allPages = val;
      },
      handleCurrentChange(val) {
        this.nowPages = val;
      }
    },
    watch: {
      input(val) {
        // 说明输入框有值
        if (val.trim() !== "") {
          this.arr = this.tableData.filter(item => {
            return JSON.stringify(item).includes(val);
            // return JSON.stringify(item).indexOf(val) > 0
            // return JSON.stringify(item).indexOf(val) !== -1
          });
        } else {
          this.arr = this.tableData;
        }
      }
    },
    mounted() {
      this.getCity();
    },
    created() {},
    filters: {},
    computed: {},
    directives: {}
  };
</script>

<style scoped lang="scss"></style>
