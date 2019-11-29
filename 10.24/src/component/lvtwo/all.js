import React, { Component } from 'react'
import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'

import Dian from './lvsan/dian'
import Words from './lvsan/words'
class All extends Component {
    render() {
        return (
            <div>
                <div className='main'>
                <div className='banner'></div>
                <div className='lvsan'>
                    <Link to='/home/all/dian'>点餐</Link>
                    <Link to='/home/all/words'>评价</Link>
                </div>
                <Switch>
                    <Route path='/home/all/dian' component={Dian} />
                    <Route path='/home/all/words' component={Words} />
                    <Redirect from='/home/all' to='/home/all/dian' />
                </Switch>
                   
                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
    
}



export default All