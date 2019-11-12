import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  btnClick(e){
    console.log('e...',e,this)
  }
  render(){
    let {changeNum}=this.props;
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>

        <div>
          <button onClick={()=>changeNum('+')}>+</button>
          <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
          
        </div>
      </div>
    );
  }
  
}

// props类型检测
IndexPage.propTypes={
  num:Number
}

// props默认值

IndexPage.defaultProps={
  num:100
}


export default connect(state=>{
  console.log('state...',state)
  return {
    num:state.num.num
  }
},dispatch=>{
  return{
    changeNum:type=>dispatch({
      type:'num/changNum',
      payload:{type}
    })
  }
})(IndexPage);
