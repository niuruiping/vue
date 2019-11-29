import {createStore} from 'redux'

let reducer=(state,action)=>{
    console.log(state,action)
    if(action.type==='LIST'){//2
        state.list=action.list
    }
    if(action.type==='ADD'){
        state.num++
    }
    if(action.type==='JIAN'){
        state.num--
    }
    return {...state}
}

let initState={
    list:[],
    num:0
}

let store=createStore(reducer,initState)

export default store