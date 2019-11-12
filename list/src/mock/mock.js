
import Mock from 'mockjs'
Mock.mock('/list','get',{
    'kk|30':[{
        id:'@id',
        title:'@region'
    }]
})