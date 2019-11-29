import mock from '../mock/mock.js'

function RequerProps(url){
    return new Promise(res=>{
        res(mock[url]())
    })
}

export default RequerProps