<!--已发布-->
<template>
  <div class="back">
    <div v-if="list.length > 0">
      <div class="publish">
        <el-table :data="list" border style="width: 100%">
          <el-table-column prop="number" type="index" width="30" align="center">
          </el-table-column>
          <el-table-column prop="date" label="标题" width="260" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="作者" width="85" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="类目" width="100" align="center">
            <template slot-scope="scope">
              <el-tag type="info" v-if="scope.row.category === 'Vue'">{{scope.row.category}}</el-tag>
              <el-tag v-if="scope.row.category === 'React'">{{ scope.row.category }}</el-tag>
              <el-tag type="success" v-if="scope.row.category === 'Node.js'">{{ scope.row.category }}</el-tag>
              <el-tag type="warning" v-if="scope.row.category === '性能优化'">{{ scope.row.category }}</el-tag>
              <el-tag type="danger" v-if="scope.row.category === 'JavaScript'">{{ scope.row.category }}</el-tag>
              <el-tag type="info" v-if="scope.row.category === '小程序'">{{ scope.row.category }}</el-tag>
              <el-tag type="warning" v-if="scope.row.category === '工具类'">{{ scope.row.category }}</el-tag>
              <el-tag type="success" v-if="scope.row.category === '其他'">{{ scope.row.category }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="来源" width="100" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.source }}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="date"
              label="重要性"
              width="160"
              align="center"
          >
            <template slot-scope="scope">
              <el-rate
                  v-model="scope.row.star"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
              </el-rate>
            </template>
          </el-table-column>
          <el-table-column
              prop="name"
              label="发布时间"
              width="280"
              align="center"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ $dayjs(scope.row.date).format("YYYY年MM月DD日HH:mm:ss") }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300" align="center">
            <template slot-scope="scope">
              <el-button
                  type="primary"
                  size="mini "
                  @click="edit(scope.$index, scope.row)"
              >
                编辑
              </el-button>

              <el-button
                  size="mini "
                  type="danger"
                  @click="articleDeletion(scope.row)"
              >
                删除</el-button>
              <el-button
                  size="mini "
                  type="success"
                  @click="viewArticles(scope.$index, scope.row)"
              >
                查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-else><h1 style="text-align: center">嘻嘻~~~ 暂时没有发表的文章~~~</h1></div>
  </div>
</template>

<script>
  export default {
    name: "Published",
    components: {},
    props: {},
    data() {
      return {
        list: []
      };
    },
    methods: {
      getlist() {
        this.$axios
            .req("api/article/allArticle")
            .then(res => {
              this.list = res.data;
              this.arr= res.data
              this.list.map(item=>{
                item.star=Number(item.star)
              });                              //导入star将其转换成数字
              console.log(res);
            })
            .catch(arr => {
              console.log(arr);
            });
      },
      //删除
      articleDeletion(row){
        this.$axios
            .req("/api/article/delete",
            {_id:row._id})
            .then(res => {
              if (res.code===200){
                this.getlist()
              }
            })
      },
      //编辑
      edit(){},
      //查看
      viewArticles(){}
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
  .back {
    width: 100%;
    height: 834px;
    background: #f0f2f5;
  }
  .publish {
    width: 98%;
    margin: 0 auto;
    background: white;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
