import React,{Component,PropTypes} from 'react'
import {History,Link} from 'react-router'
import {connect} from 'react-redux'

class List extends Component{
  render(){
    return(
      <div>
        <ul>
          {
            this.props.list.map((item,index)=>{
              return <ListItem key={index} {...item} index={index}/>
            })
          }
        </ul>
      </div>
    )
  }
}

class ListItem extends Component{
  constructor(props,context){
    super(props,context)
    this.state= {
      productCount:this.props.num,
      chooseState:this.props.chooseState
    }
    this.getProductCount = (type) => {
      if(this.state.chooseState){
        let num = this.state.productCount
        if(type =='reduce'&&num>0){
          num=num-1;
          this.setState({
            productCount:num
          })
        }else if(type == 'add'){
          num =num + 1;
          this.setState({
            productCount:num
          })
        }
        this.context.recordState(this.props.id,this.state.chooseState,num,this.props.index)
      }
    }

    this.handleChange = (event) => {
      if(this.state.chooseState){
        let newValue = event.target.value
        newValue = Number(newValue.replace((/\D+/gi),''))
        this.setState({
          productCount:newValue
        })
        this.context.recordState(this.props.id,this.state.chooseState,newValue,this.props.index)
      }
    }

    this.changeState = () => {
      let state = !this.state.chooseState
      this.setState({chooseState:state})
      this.context.recordState(this.props.id,state,this.state.productCount,this.props.index)
    }
  }

  render(){
    let {productName,id} = this.props;
    let productCount = this.state.productCount;
    return(
      <li>
        <div onClick={this.changeState}>{productName}</div>
        <div>
          <button disabled={productCount>0?'':'disabled'} onClick={this.getProductCount.bind(this,'reduce')}></button>
          <input type="text" maxLength="5" value={productCount} onChange={this.handleChange}/>
          <button onClick={this.getProductCount.bind(this,'add')}></button>
        </div>
      </li>
    )
  }
}


class Main extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      productList:[],
      params:'',
      shouldUpdate:false,
      left:0,
      num:0,
      director:-1,
      requestID:null,
      clientWidth:0,
      moving:false
    }

    this.productsState = (id,chooseState,num,index) => {
      this.state.productList[index].chooseState = chooseState
      this.state.productList[index].num = num
      this.props.saveProductlist(this.state.productList)
    }

    this.move = () => {
      this.state.clientWidth = document.documentElement.clientWidth;
      this.state.director = this.state.director*(-1)
      cancelAnimationFrame(this.state.requestID)
      this.getMove()
      this.state.moving = true
    }

    this.getMove = () =>{
      this.state.requestID = requestAnimationFrame(()=>{
        this.state.num = this.state.director*4 + this.state.num
        this.setState({left:this.state.num+'px'})
        if(this.state.num>=this.state.clientWidth - 100){
          this.state.director = this.state.director*(-1)
        }else if(this.state.num<=0){
          this.state.director = this.state.director*(-1)
        }
        this.getMove()
      })
    }
  }

  getChildContext () {
    return {
      recordState:this.props.recordState
    }
  }

  componentWillReceiveProps(nextProps){
    this.state.shouldUpdate = false
    if(this.props!==nextProps) {
      let data = nextProps.state.data
      if(nextProps.producRecord.productList&&this.state.productList.length == 0){
        this.state.shouldUpdate =true
        this.state.productList = nextProps.producRecord.productList;
      }else if(data&&data.data&&data.data.data&&this.state.productList.length == 0){
        this.state.shouldUpdate =true
        let list = data.data.data
        this.props.newProductData(list)
        list.forEach((item,index)=>{
          this.state.productList[index] ={};
          this.state.productList[index]['productName'] = item.product_name
          this.state.productList[index]['chooseState'] = false
          this.state.productList[index]['id']=item.product_id
          this.state.productList[index]['num']=1
        })
      }
      if(nextProps.producRecord.id){
        let {producRecord} = nextProps
        this.productState(producRecord.id,producRecord.chooseState,producRecord.num,producRecord.index)

      }
    }
  }

  componentWillUpdate(nextProps,nextState){}

  componentWillMount(){
    this.state.params = this.props.location.search

  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.requestID)
  }
  render() {
    return (
      <div>
        {
          this.state.productList.length>0?<List list={this.state.productList}/>:null
        }
      </div>
    )
  }
}

export default Main