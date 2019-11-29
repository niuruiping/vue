import React, { Component } from 'react'
import {connect} from 'react-redux'
import RequerProps from '../../../untail/untail'
class Dian extends Component {
    render() {
        return (
            <div>
                 {
                        this.props.list.map((item,index)=>{//5
                            return <div className='box' key={index}>
                                <span className='pic' onClick={()=>{this.props.history.push('/xiangqing',item)}}>
                                    <img src={item.img} />
                                </span>
                                <div className='word'>
                                {item.name}
                                <div>{item.title}</div>
                                <div>{item.id}</div>
                                </div>

                                {/* 加加减减 */}
                                <div className='numb'>
                                    <span className='jian' onClick={()=>{this.props.jian()}}>-</span>
                                    <b style={{textAlign:'center'}}>{this.props.num}</b>
                                    <span className='add' onClick={()=>{this.props.add()}}>+</span>
                                </div>
                            </div>
                        })
                    }
            </div>
        )
    }
    componentDidMount(){//4
        this.props.getList()
    }
}
let mapStateToProps=(store)=>{
    let {list,num}=store//3
    return {
        list,
        num
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        //渲染1
        getList(){
            RequerProps('/data/json').then(data=>{
                dispatch({type:'LIST',list:data})
            })
        },
        //加加
        add(){
            dispatch({type:'ADD'})
        },
        //减减
        jian(){
            dispatch({type:'JIAN'})
        }
    }
}

Dian=connect(mapStateToProps,mapDispatchToProps)(Dian)
export default Dian