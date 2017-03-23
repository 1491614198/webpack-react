// var React = require('react');
import React,{Component} from "react";
import NB from '../component/dull'
import "../css/ReactTrans.css";

class Page1 extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            list:['导航一','导航二','导航三'],
            content:[
                {item:'内容一'},
                {item:'内容二'},
                {item:'内容三'}
            ],
            currunt:0,
            name:'h'
        })
    }
    handleClick(){
        this.setState({name:'5555'})
    }
    change1(e){
        this.setState({user:e.target.value})
    }
    render(){
        const {count}=this.props;
        let arr=[
            <h1>hello world </h1>,
            <h2>React</h2>
        ]
        // let username = getCookie('username');
        // if()
        // let expdate = new Date();
        // expdate.setTime(expdate.getTime()+30*60*1000);
        // console.log(expdate);
        // document.cookie=name+"="+value+";expire="+expdate.toUTCString()+";path=/";
        return(
            <div>
                <NB/>
                <div className="box">

                    <h1 onClick={this.handleClick.bind(this)}>原来是这样的{this.state.name}</h1>
                    <input type="text"/>
                    <button onClick={this.submit}>点击</button>

                    <input type="text" ref="change" value={this.state.user}/>
                    <input type="text" onChange={this.change1.bind(this)}/>
                    <div>{arr}</div>
                </div>
                <div>
                    {this.state.list.map((val,index)=>{
                        return (<list currentClass={::this.currentClass} handleClick={::this.handleClick} val={val} key={index} index={index}/>)
                    })}
                    {this.state.content.map((val,index)=>{
                        return (<Content key={index} val={val.item} index={index} contentClass={::this.contentClass}/>)
                    })}
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