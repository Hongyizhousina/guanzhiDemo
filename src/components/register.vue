
<template>
  <div class="login">
      
    <ul class="userDataEnter">
      <li><img src="email.png" alt=""><input type="text" placeholder="请输入邮箱" name="" id=""></li>
      <li><img src="password.png" alt=""><input type="text" placeholder="请输入密码" name="" id=""></li>
    </ul>
    <div class="btnDiv">
        <a href="#" v-on:click='registBtnClick'>注册</a>
        <a href="#" v-on:click='loginBtnClick'>登录</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  props: {
  },
  methods:{
    loginBtnClick:function(){
      this.$router.push("Login")
    },
    registBtnClick:function(){
      this.$router.push("Register")
    },  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only 添加“作用域”属性以仅将CSS限制到此组件 -->
<style scoped>
.btnDiv{
  display: flex;
  flex-direction: column;
  width:  100vw;
  height: auto;
  margin-top:10px;
  align-items: center;
  justify-content: center;
}
.btnDiv>a{
  width: 95%;
  height: 40px;
  background-color: deepskyblue;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  border-radius: 5px;
}
.userDataEnter{
  width:auto;
  height: auto;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
}
.userDataEnter>li{
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  margin-top: 10px;
  border-bottom: 1px solid gray;
  align-items: center;
}
.userDataEnter>li>img{
  width: 18px;
  height: 18px;
  margin-left: 10px;
  margin-right: 5px;
}
.userDataEnter>li>input{
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: gray;
}
.userDataEnter>li>input::placeholder{
    font-size: 18px;
    color: gray
}
.login{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.backSpan{
  width: 20px;
  height: 20px;
  align-self: flex-start;
  margin-top: 25px;
  margin-left: 25px;
}
.backSpan>img{
  width: 100%;
}
.logoDiv{
  width: 98%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Logo{
  width: 80%;
  height: auto;
}

</style>
