<template>
  <div>
      <ul v-for="item in list" :key="item.id">
        <span>{{item.id}}</span>
        <span>{{item.title}}</span>
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
	  created(){
	    axios.get('/list').then(res=>{
	      this.list=res.data.kk
	    })
	  }
    
}
</script>

<style>

</style>