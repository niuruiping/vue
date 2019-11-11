import Mock from 'mockjs'
Mock.mock('/list','get',{
    'hot|30':[{
        id:'@id',
        title:'@ctitle'
    }]
})