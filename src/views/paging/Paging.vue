<!-- 分页表格-->
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
            <i class="el-icon-edit"></i>
            修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index, scope.row)"
          >
            <i class="el-icon-delete"></i>
            删除</el-button
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
        :page-sizes="[10, 50, 100, 150]"
        layout="total,sizes,prev,pager,next,jumper"
        :total="arr.length"
      ></el-pagination>
    </div>
<!--      修改产品信息-->
    <el-dialog title="产品信息更改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="form.NAME" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="form.PRESENT_PRICE" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editBack">取 消</el-button>
        <el-button type="primary" @click="editGo">确 定</el-button>
      </div>
    </el-dialog>
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
      currentPage: 1,  //默认选择跳转到第几页
      allPages: 10,   //默认选择每页显示10条
      nowPages: 1,  //当前页
      dialogFormVisible: false, //默认不出现
      form: {} //接受选中的值
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
    //点击修改按钮
    edit(index, row) {
      this.dialogFormVisible = true; //点击触发事件
      this.form = row; //使获取的值等于这个参数
    },
    //修改确认按钮
    editGo() {
      this.dialogFormVisible = false;
      this.$message({
        message: "修改信息成功",
        type: "success"
      });
    },
    //修改取消按钮
    editBack() {
      this.dialogFormVisible = false;
      this.$message({
        message: "修改失败",
        type: "warning"
      });
    },
    //删除数据
    del(index) {
      this.tableData.splice(index, 1);
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
      this.nowPages=1  //跳转到第一页
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
