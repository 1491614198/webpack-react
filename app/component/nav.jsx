import React,{Component} from 'react'
import "../css/nav.css"


class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:1
    }
  }
  handle(number){
    this.setState({
      number:number
    })
  }
  render(){

    return(
      <div>
        <div className="nav">
          {this.props.dao.map((item,i)=>( <div className="nav_first" key={i} onMouseMove={this.handle.bind(this,item)}>{item}</div>))}
        </div>
        {this.state.number}
      </div>
    )
  }
}

export default Nav