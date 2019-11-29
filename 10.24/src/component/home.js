import React, { Component } from 'react'
import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import All from '../component/lvtwo/all'
import Drink from '../component/lvtwo/drink'
import Food from '../component/lvtwo/food'
import Hanbao from '../component/lvtwo/hanbao'
export default class Home extends Component {
    render() {
        return (
            <div>
                <p className='header'>美食</p>
                <div className='nav'>
                    <Link to='/home/all'>全部</Link>
                    <Link to='/home/drink'>粉面</Link>
                    <Link to='/home/food'>便当</Link>
                    <Link to='/home/hanbao'>汉堡</Link>
                </div>
                <Switch>
                    <Route path='/home/all' component={All}/>
                    <Route path='/home/drink' component={Drink}/>
                    <Route path='/home/food' component={Food}/>
                    <Route path='/home/hanbao' component={Hanbao}/>
                    <Redirect from='/home' to='/home/all' />
                </Switch>
            </div>
        )
    }
}
