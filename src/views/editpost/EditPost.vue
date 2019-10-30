<!--已发布编辑-->
<template>
  <div>
    <div class="top">
      <el-button type="danger" @click="Return">返回</el-button>
      <el-button type="primary" @click="release">发布</el-button>
    </div>
    <div class="inp">
      <template>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="ruleForm.title" ></el-input>
          </el-form-item>
          <el-form-item label="文章摘要" prop="abstract">
            <el-input v-model="ruleForm.abstract" ></el-input>
          </el-form-item>
          <div style="display: flex">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item label="类目" prop="category">
              <el-select v-model="ruleForm.category" >
                <el-option label="Vue" value="Vue"></el-option>
                <el-option label="React" value="React"></el-option>
                <el-option label="Node.js" value="Node.js"></el-option>
                <el-option label="性能优化" value="性能优化"></el-option>
                <el-option label="JavaScript" value="JavaScript"></el-option>
                <el-option label="小程序" value="小程序"></el-option>
                <el-option label="工具类" value="工具类"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="来源" prop="source">
              <el-select v-model="ruleForm.source" >
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="与他人合作" value="与他人合作"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="重要性" prop="star">
              <el-select v-model="ruleForm.star" >
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
              </el-select>
            </el-form-item>
            <!--            发布时间-->
            <div class="block">
              <el-form-item label="发布时间" prop="date">
                <el-date-picker
                    v-model="ruleForm.date"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </template>
    </div>
    <div id="main">
      <mavon-editor v-model="ruleForm.text"/>
    </div>
    <div style="text-align: center;margin:46px 0">
      <el-button type="primary" @click="release">发布</el-button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "EditPost",
    components: {},
    props: {},
    data() {
      return {
        ruleForm:{
          title:'',            //文章标题
          abstract:'',          //文章摘要
          author:'',            //作者
          category:'',        //类目
          source:'' ,         //来源
          star:'',       //重要性
          date:''   ,           //发布时间
          text:''              //文章内容
        },
        //获取此刻时间
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }],
        },
        id: "",
        rules: {
          title: [{ required: true, trigger: "blur" }],
          abstract: [{ required: true, trigger: "blur" }],
          author: [{ required: true, trigger: "blur" }],
          category: [{ required: true, message: "请选择", trigger: "change" }],
          source: [{ required: true, message: "请选择", trigger: "change" }],
          star: [{ required: true, message: "请选择", trigger: "change" }]
        }
      }
    },
    methods: {
      //返回到上一页
      Return(){
        this.$router.push("/publish")
      },
      release(){
        this.$axios
            .req("/api/article/update", {
              id: this.id,
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              date: this.ruleForm.date
            })
            .then(res => {
              console.log(res);
                this.$message({
                  showClose: true,
                  message: "文章编辑成功",
                  type: "success"
                });
            })
            .then(res => {
              this.ruleForm = res.data;
            })
            .catch(err => {
              console.log(err);
            });
        this.$router.push("/publish")
      },
      getlist() {
        this.$axios
            .req("/api/article/article", { _id: this.id })
            .then(res => {
              this.ruleForm = res.data;
              console.log(res);
            })
            .catch(arr => {
              console.log(arr);
            });
      }
    },
    mounted() {
      this.id = this.$route.query.id;
      this.getlist();
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .top{
    margin-bottom: 20px;
    text-align: center;
  }
</style>
