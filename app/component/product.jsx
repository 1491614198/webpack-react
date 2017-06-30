// var React = require('react');
import React,{Component} from "react";
import NB from '../component/dull'
import "../css/ReactTrans.css";

class Page1 extends React.Component{
    constructor(){
        super();

    }
    render(){
        const {data,list}=this.props

        return(
          <div>
            {data.name}
            {list.type}
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
        return(
            <div>
                <Page1 data={data} list={list}/>
                don't get me {data.name}
            </div>
        )
    }
}


export default Product;