<template>
<div>
  <div class="header">
    <p class="b">圈子登录</p>
    <input type="text" placeholder="用户名" class="user">
    <input type="text" placeholder="密码" class="password">
    <button class="btn" @click="login">登录</button>
    <router-link to='/enroll' class="i">没有账号,快速注册</router-link>
    
  </div>
  <div class="footer">
    <i class="left"></i>
    <i class="middle">第三方登录</i>
    <i class="right"></i>
  </div>
</div>
</template>

<script>
// import {login} from '@'
export default {

}
</script>

<style lang='scss' scoped>

body,html{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 100%;
  font-size: 12px;

}
.b{
  width: 100%;
  height: 50px;
  font-size: 15px;
  background: #eee;
  text-align: center;
  line-height: 50px;
  margin-bottom: 25px;

}
.user{
  width: 90%;
  height: 40px;
  margin-left: 5%;
  background: #eee;
  border: 0;
  display: block;
  margin-bottom: 10px;
}
.password{
  width: 90%;
  height: 40px;
  margin-left: 5%;
  background: #eee;
  margin-bottom: 20px;
  display: block;
  border: 0;
}
.btn{
  width: 90%;
  height: 40px;
  margin-left: 5%;
  background:red;
  border: 0;
  margin-bottom: 15px;
  color:#fff;
  display:block ;
}
.i{
  margin-left: 5%;
  font-style:normal;
  text-decoration:underline;
}
.footer{
  width: 100%;
  height: 70px;
  position: fixed;
  font-size: 12px;
  bottom: 0;

}
.left{
  width: 32%;
  margin-left: 5%;
  margin-top: 8px;
  float: left;
  border-bottom: 1px solid #ccc;
}
.right{
  width: 32%;
  margin-right: 5%;
  float: right;
  margin-top: 8px;
  border-bottom: 1px solid #ccc;
}
.middle{
  font-style:normal;
margin-left: 17px;
}
</style>