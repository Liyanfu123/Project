<!--注册-->
<template>
  <div>
    <img src="../../icons/timg1.jpg" alt="" width="1600" height="785">
    <div id="bg-img">
      <div id="big-box">
        <div id="box">
          <div>
            <div id="top-tit">欢迎来到小梨后台管理系统</div>
            <div class="cont">
              <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
              >
                <div style="margin-top: 55px;width: 430px">
                  <el-form-item label="用户名" prop="user">
                    <el-input v-model="ruleForm.user"></el-input>
                  </el-form-item>
                  <el-form-item label="输入密码" prop="pass">
                  <el-input
                      type="password"
                      v-model="ruleForm.pass"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                  <div style="margin-left: 105px">
                    <el-form-item>
                      <el-button type="primary" @click="Register">立即注册</el-button>
                    </el-form-item>
                  </div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    components: {},
    props: {},
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("用户名不能为空"));
        }else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
      return {
        ruleForm: {
          //定义一个空字符串 装密码
          pass: "",
          //定义一个空字符串 装用户名
          user: ""
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: "blur" },
            { required: true, message: "密码不能为空" },
            { min: 6, max: 24, message: "长度在 6 到 24 的字符" }
          ],
          user: [
            { validator: checkAge, trigger: "blur" },
            //设置需要条件
            { min: 2, max: 12, message: "长度在 2 到 12 的字符" }
          ]
        }
      };
    },
    methods: {
      Register(){
        // console.log(111);
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.$axios
                .req("/api/user/register", {
                  username: this.ruleForm.user,
                  password: this.ruleForm.pass,
                })
                .then(res =>{
                  // console.log(res,111);
                  if (res.code === 200){
                    //注册成功后执行
                    this.$message({
                      showClose:true,
                      message:res.message,
                      type:"success"
                    })
                    //注册 点击注册按钮跳转到登录页面 //成功后跳转页面
                    this.$router.push("/login")
                  }else {
                    //失败后执行
                    this.$message({
                      showClose:true,
                      message:res.message,
                      type:"error"
                    })
                  }
                });
          }
        });
      },
    },
    mounted() {},
    created() {},
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  };
</script>

<style scoped lang="scss">
  #bg-img{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }
  #big-box {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    #box {
      background: #ffffff;
      width: 500px;
      height: 300px;
      border: 1px solid #ccc;
      #top-tit {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>