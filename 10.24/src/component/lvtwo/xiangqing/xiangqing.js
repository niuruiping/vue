import React, { Component } from 'react'

export default class Xiang extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div onClick={()=>{this.props.history.goBack()}}>《返回</div>
                <div>{this.props.location.state.name}</div>
                <div className='tu'><img src={this.props.location.state.img} /></div>
            </div>
        )
    }
}
