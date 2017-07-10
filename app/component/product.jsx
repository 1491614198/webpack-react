// var React = require('react');
import React,{Component} from "react";
import NB from '../component/dull'
import "../css/ReactTrans.css";
import Nav from '../component/nav'


class Page1 extends React.Component{
    constructor(){
        super();

    }
    render(){
        const {data,list}=this.props

        return(
          <div>
              <h2>{data.name}</h2>
              <h1>{list.type}</h1>
          </div>)
    }
}

class Product extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const data={
            name:(1+1>2)?'杜大鸣':'杜小明',
            type:'create'
        };
        const list={
            name:'小明',
            type:'update'
        }
        const dao=['环境','教学','体系','首页']
        return(
            <div>
                <Nav dao={dao}/>
                <Page1 data={data} list={list}/>
                don't get me {data.name}
                {/*<Link to='/build'>lalalalallalal</Link>*/}
            </div>
        )
    }
}


export default Product;