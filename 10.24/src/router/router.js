import React,{Component} from 'react';
import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import Home from '../component/home'
import Xiang from '../component/lvtwo/xiangqing/xiangqing'
class Router extends Component{
    render(){
        return <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/xiangqing' component={Xiang} />
                <Redirect from='/' to='/home' />
            </Switch>
        </BrowserRouter>
    }
}

export default Router