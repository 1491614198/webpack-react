import React,{Component} from 'react'
import fetch from 'isomorphic-fetch'
import 'es6-promise'

class Todo extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'endendend',
      age:'999'
    }
  }
  submit(){
    fetch('http://localhost:9090/api/demo',{method:'post',headers:{'Accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded'},body:'id='+10+'&name='+this.state.name+'&url='+'www.newband.com'+'&country='+'shanghai'}).then(function(response){
      if(response.status==200){
        return response;
      }}).then().catch((err)=>{console.log('错误为'+err)})
  }
  add(){
    this.setState({
      age:this.state.age+'1'
    })
  }
  render(){
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Hi {this.props.age}</h2>
        <h3>Bye {this.props.tel}</h3>
        <h6>hehe {this.state.name}</h6>
        <span>lalal {this.state.age}</span>
        <button onClick={this.submit.bind(this)}>点击</button>
        <button onClick={this.add.bind(this)}>增加</button>
      </div>
    )
  }
}

Todo.propTypes = {
  name:React.PropTypes.string.isRequired,
  age:React.PropTypes.string.isRequired,

}

export default Todo