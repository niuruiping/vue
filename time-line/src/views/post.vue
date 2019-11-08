<template>
  <div>
      <van-cell-group>
          <van-field
          v-model="message"
          rows='3'
          autosize
          label="内容"
          type="textarea"
          maxlength='50'
          placeholder="请输入留言"
          show-word-limit
          ></van-field>
          <van-button type='primary' size='large' @click="post">发布</van-button>
      </van-cell-group>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        ...mapActions({
            postTimeline:'timeline/postTimeline'
        }),
        async post(){
            if(!this.message){
                this.$toadt('请输入内容');
                return;
            }
            await this.postTimeline(this.message)
            this.$$toadt('发布成功');
            window.history.back()
        }
    }
}
</script>

<style>

</style>