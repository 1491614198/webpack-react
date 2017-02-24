// var React = require('react');
import React,{Component} from "react";
import "../css/ReactTrans.css";

class Page1 extends React.Component{
    constructor(props){
        super(props)
        this.state={saved:false}
    }
    changeColor(){
        console.log(1);
        this.setState({
            saved:true
        })
    }
    render(){
        let {save,text} = this.props;
        return(

            <div>
               <h1 onClick={this.changeColor.bind(this)}>{this.state.saved?save:text} aaa </h1>
            </div>
        )
    }
}

class Product extends React.Component{
    render(){
        return(
            <Page1/>
        )
    }
}


export default Product;