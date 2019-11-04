<template>
<div>
  <div class="header">
    <p class="b">圈子注册</p>
    <input type="text" placeholder="用户名" class="user">
    <input type="text" placeholder="密码" class="password">
    <button class="btn">注册</button>
  </div>
  
</div>
</template>

<script>
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

</style>