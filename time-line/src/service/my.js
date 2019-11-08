import axios from 'axios'

// 用户注册
export let register =params=>{
    return axios.post('/api/user/register',params);
}

// 用户登录
export let login =params=>{
    return axios.post('/api/user/login',params);
}

// 获取用户名
export let loginUser =()=>{
    return axios.post('/api/user/loginUser');
}