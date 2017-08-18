import React,{Component} from 'react'
import '../css/xiechen.less'

class Top extends Component{
  constructor(props){
    super(props)
  }
  show(){
    let a = document.getElementById('next');
    let b = document.getElementById('global');
    let c = document.getElementById('three');
    c.style.transform="rotate(180deg)"
    // b.style.borderColor="red"
    a.style.display='block'
  }
  hidden(){
    let a = document.getElementById('next');
    let b = document.getElementById('global');
    let c = document.getElementById('three');
    c.style.transform="rotate(0deg)"
    a.style.display='none'
    b.style.borderColor="white"
  }
  render(){
    let input_style={
      width:"100%",
      borderRadius:'10px'
    }
    return(
      <div className="top">
        <div className="top_1">
          <img src={require('../image/log.png')} alt=""/>
        </div>
        <div className="top_input">
          <input type="text" placeholder="暑期狂欢派对,酒店最高省1000元" style={input_style}/>
        </div>
        <div className="top_message" onMouseOver={this.show} onMouseOut={this.hidden}>
          <div className="global" id="global">Global Sites</div>
          <div id="three"></div>
          <div className="top_next" id="next">
            <ul>
              <li>哈哈哈dddddd</li>
              <li>嘻嘻嘻</li>
              <li>叭叭叭</li>
            </ul>
          </div>
        </div> |
        <div className="top_kefu">
          客服中心
        </div>
        <div className="top_nei">国内：400-830-6666</div>

      </div>
    )
  }
}

export default Top