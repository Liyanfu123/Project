<template>
  <div>
    <el-table :data="tableData" style="width: 100%" >
      <!--      名称-->
      <el-table-column label="名称" width="300" align="center">
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
          <el-button size="mini" type="primary" @click="dialogFormVisible(scope.$index, scope.row) ===true">
            <i class="el-icon-edit"></i>
            修改</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">
            <i class="el-icon-delete"></i>
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
<!--    <template>-->
<!--      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
<!--        <el-form :model="form">-->
<!--          <el-form-item label="活动名称" :label-width="formLabelWidth">-->
<!--            <el-input v-model="form.name" autocomplete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="活动区域" :label-width="formLabelWidth">-->
<!--            <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--              <el-option label="区域一" value="shanghai"></el-option>-->
<!--              <el-option label="区域二" value="beijing"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--        <div slot="footer" class="dialog-footer">-->
<!--          <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
<!--        </div>-->
<!--      </el-dialog>-->
<!--    </template>-->
  </div>
</template>

<script>
export default {
  name: "Excel",
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      dialogFormVisible:false
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("/api/tableData ")
        .then(res => {
          console.log(res);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del(index){
      this.tableData.splice(index,1)
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
