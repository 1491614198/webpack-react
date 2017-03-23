import React from 'react';

class GGrid extends React.Component{
    constructor(props){
        super(props);
        this.store = props.store;
        this.showThead = props.showThead||false;
        this.layout= props.layout;
        this.OuterGridItem = props.OuterGridItem;
        this._ajaxLoaded = false;
        this.state={
            data:this.store.getDataStructure()
        };
        this.initData();
    }
    initData(){
        this.store.deferred.done(
            (d)=>{
                this.store.setData(d);
                this._ajaxLoaded=true;
                this.setState({data:this.store.getData()})
            }
        )
    }
    render(){
        var OuterGridItem = this.OuterGridItem;
        var hasData = false;
        if(this.store.hasData()){
            hasData=true;
        }
        if(hasData){
            if(OuterGridItem){
                return <div>
                    {
                        this.state.data.items.map((itemData,key)=><OuterGridItem key={key} itemData={itemData}/>)
                    }
                </div>
            }
            return <GGrid data={this.state.data} layout={this.layout} showThead={this.showThead}/>
        }else{
            if(this._ajaxLoaded) return <div>暂无数据</div>
            else return <div><div></div></div>
        }
    }
    componentDidMount(){
        this._scrollHandler=()=>{
            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            var scrollTop = document.body.scrollTop;
            var scrollHeight2 = document.body.scrollTop+clientHeight;
            var delayTime = 1500;
            if(scrollTop>0&&scrollHeight2==scrollHeight){
                window.removeEventListener("scroll",this._scrollHandler,false);
                var loading = document.querySelector(".loading");


                loading.style.display = "block";
                document.body.scrollTop = scrollTop+loading.clientHeight;
                if(this.state.data.totalPage<=1 && this.state.data.pageNo >=this.state.data.totalPage){
                    var t=window.setTimeout(()=>{
                        loading.innerHTML="已加载全部";
                        clearTimeout(t);
                    },delayTime);
                    return
                }
                this.store.request({
                    pageNo:this.state.data.pageNO+1,
                    pageSize:this.state.data.pageSize
                }).done(
                    (d)=>{
                        this.store.setData(d);
                        var t= window.setTimeout(()=>{
                            loading.style.display = "none";
                            this.setState({data:this.store.getData()});
                            window.addEventListener('scroll',this._scrollHandler,false);
                            clearTimeout(t)
                        },delayTime)
                    }
                )
            }
        }
        window.addEventListener('scroll',this._scrollHandler,false);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this._scrollHandler,false);
    }
}
class Grid extends React.Component{
     constructor(props){
         super(props);
         this.layout = props.layout;
         this.data = props.data;
         this.showThead = props.showThead;
     }
     render(){
         var items = this.data.items;
         return(
             <div>
                 <table>
                     <thead style={{display:this.showThead?"block":"none"}}>
                       <tr>
                           {this.layout.map((item,key)=><th key={key}>{item.name}</th>)}
                       </tr>
                     </thead>
                     <tbody>
                     {
                         items.map((itemData,key)=>{
                             var jsx=[];
                             for(var i=0;i<this.layout.length;i++){
                                 var style=this.layout[i].style;
                                 var formatter = this.layout[i].formatter;
                                 var value = itemData[this.layout[i].filed];
                                 if(formatter){
                                     value = formatter(value);
                                 }
                                 jsx.push(<td key={i} style={style}>{value}</td>)
                             }
                             return <tr key={key}>{jsx}</tr>
                         })
                     }
                     </tbody>

                 </table>
             </div>
         )
     }
}
export default Grid;