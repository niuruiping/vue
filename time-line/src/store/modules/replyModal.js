import {publishReply,publishComment} from '@/service/index'
const state={
    info:{},
    show:false
}
const mutations={
    showModal(state,payload){
        state.info=payload.info;
        state.show=true;
    }
}
const actions={
    async reply({comment,state,dispatch},payload){
        console.log('payload...',payload,state.info);
        let data={};
        if(state.info.type==='comment'){
            data=await publishComment({
                dynamicid:state.info.dynamicid,
                commentContent:payload
            })
        }else{
            data=await publishReply({
                toCommentReplyid:state.info.toCommentReplyid,
                replyContent:payload
            })
        }
        await dispatch('timeline/getTimeline',null,{root:true});
        comment('hideModal')
    }
}

export default {
    namespaced: true,
    state,
    actions, 
    mutations
}