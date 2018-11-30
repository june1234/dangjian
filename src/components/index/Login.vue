<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="form.password"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click.native.prevent="submitForm('form')"
        :loading="loading"
        style="width:100%;"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    const checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不得为空"));
      } else {
        callback();
      }
    };
    const checkPassWord = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不得为空"));
      } else {
        callback();
      }
    };

    return {
      form: {
        username: "",
        password: ""
      },
      rules2: {
        password: [
          {
            validator: checkPassWord,
            trigger: "blur"
          }
        ],
        userName: [
          {
            validator: checkUserName,
            trigger: "blur"
          }
        ]
      },
      loading: false
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
        this.$refs[formName].validate(valid => {
          if (valid) {
            that.loading = true;
            alert("submit!");
            that.$store
              .dispatch("Login", this.form)
              .then(() => {
          that.loading = false;
        that.$router.push('/BackgroundManagement/index')
              })
              .catch(err => {
                console.log(err);
                that.loading = false;
              });
          } else {
            console.log("error submit!!");
            return false;
          }
      });
	//    that.$router.push({ path: '/BackgroundManagement' })
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background: -webkit-linear-gradient(#fff, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fff, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fff, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fff, blue); /* 标准的语法 */
  height: 100%;
  padding: 200px;
  .el-form {
    width: 35%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 20px;
  }
}
</style>
