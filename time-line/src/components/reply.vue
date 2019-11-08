<template>
  <div>
      <li v-for="value in reply" :key="value.commentReplyid">
          <p class="reply" @click="showReply(value)">
              <span class="commenter">{{replyName?`${value.userName}to${replyName}`:value.userName}}:</span>
              <span>{{value.commentContent?value.commentContent:value.replyContent}}</span>
          </p>
          <reply :reply="value.replys" :replyName="value.userName"/>
      </li>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name:'reply',
    data(){
        return{
            replyInfo:{
                type:'comment',
                dynamicid:'',
                toCommentReplyid:'',
                content:'',
                title:''
            },
            show:false
        }
    },
    methods:{
        ...mapMutations({
            showModal:'replyModal/showMoadl'
        }),
        showReply(value){
            this.replyInfo={
                type:'reply',
                dynamicid:value.dynamicid,
                toCommentReplyid:value.CommentReplyid,
                content:'',
                title:value.commentContent?`评论：${value.userName}`:`回复：${value.userName}`
            }
            this.showModal({
                info:this.replyInfo,
                show:true
            })
        }
    },
    props:{
        reply:{
            type: Array,
            default:()=>{return []}
        },
        replyName:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="css">
.commenter{
    color: hotpink;
}
.reply{
    margin: .1rem 0;
}
</style>