<template>
  <div>
      <ul v-for="item in list" :key="item.id">
          <li>{{item.title}}</li>
          <li>{{item.id}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    // created(){
    //     axios.get('/list').then(res=>{
    //         this.list=res.data.hot
    //     })
    // }
    created(){
        axios.get('/list').then(res=>{
            this.list=res.data.hot
        })
    }
}
</script>

<style>

</style>