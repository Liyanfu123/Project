<template>
  <div>
    <img src="../../icons/timg.jpg" alt="" width="1600" height="785">
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
                <!-- 验证码-->
                  <el-form-item label="验证码" prop="code">
                    <el-input v-model="ruleForm.code" class="inp-code"></el-input>
                    <div id="code" v-html="code"></div>
                  </el-form-item>
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')"
                      >登录</el-button>
                      <el-button @click="Register">注册</el-button>
                    </el-form-item>
                    <div class="refresh" @click="getpicture">
                      <i class="el-icon-refresh"></i>
                      刷一下
                    </div>
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
  name: "Login",
  components: {},
  props: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!String === typeof value) {
          callback(new Error("请输入正确格式"));
        } else {
          callback();
        }
      }, 1000);
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
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      }  else {
        callback();
      }
    };
    return {
      code:"",
      ruleForm: {
        //定义一个空字符串 装密码
        pass: "",
        //定义一个空字符串 装验证码
        code: "",
        //定义一个空字符串 装用户名
        user: ""
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "密码不能为空" }
        ],
        code: [
          { validator: validateCode, trigger: "blur" },
          { required: true, message: "验证码不能为空" }
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
    //登录
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$axios
              .req("/api/user/login", {
                username: this.ruleForm.user,
                password: this.ruleForm.pass,
                code: this.ruleForm.code,
              })
              .then(res =>{
                // console.log(res,111);
                //成功后执行
                if (res.code === 200){
                  this.$message({
                    showClose:true,
                    message:res.message,
                    type:"success"
                  })
                  //把收到的数据上传到LocalStorage
                  localStorage.setItem(
                      //自定义的名字，存到localStorage里面
                      "user",
                      //stringify里面是一个对象
                      JSON.stringify({
                        user: this.ruleForm.user,
                        pass:this.ruleForm.pass
                      })
                  );
                  //将输入的用户名存到state.js里面
                  this.$store.state.user = this.ruleForm.user;
                  //成功后跳转页面
                  this.$router.push("/home");
                  //失败后执行
                } else {
                  this.$message({
                    showClose:true,
                    message:res.message,
                    type:"error"
                  })
                  //重新刷新验证码
                  this.getpicture()
                }
              });
        } else {
          console.log("登录失败!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },

    //注册  点击跳转到注册页面
    Register(){
      this.$router.push("/register")
    },
    //验证码
    getpicture() {
      this.$axios
          .req("/api/captcha")
          .then(res => {
            this.code = res;
            // console.log(this.code);
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }

  },
  mounted() {
    this.getpicture()
  },
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
    height: 400px;
    border: 1px solid #ccc;
    #top-tit {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ccc;
      line-height: 50px;
      text-align: center;
    }
  }
  .inp-code{
    width: 50%;
  }
  #code{
    position: absolute;
    top: 0px;
    right: -5px;
    width: 150px;
    height: 70px;
    background: #f4f6f0;
  }
  .refresh{
    display: inline-block;
    position: relative;
    left: 330px;
    top: -45px;
    font-size: 13px;
    color: skyblue;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
