// var React = require('react');
import React,{Component} from "react";
import NB from '../component/dull'
import "../css/ReactTrans.css";

class Page1 extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            name:'h'
        })
    }
    handleClick(){
        this.setState({name:'5555'})
    }
    render(){
        const {count}=this.props;
        return(
            <div>
                <NB/>
                <div className="box">

                    <h1 onClick={this.handleClick.bind(this)}>原来是这样的{this.state.name}</h1>
                    <input type="text"/>
                    <button onClick={this.submit}>点击</button>
                </div>
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