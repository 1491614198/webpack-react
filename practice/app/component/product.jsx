var React = require('react');
require("../css/ReactTrans.css");
var ReactCSSTransitionGroup =require('react-addons-css-transition-group');
var t;
var Product =React.createClass({
    getInitialState:function(){
        this.resetClick = this.resetClick.bind(this);
        this.pauseClick = this.pauseClick.bing(this);
    },
    componentDidMount:function(){
        var {gameInit,keyup,gamePlaying,playing} = this.props;
        gameInit();
        document.addEventListener('keyup',function(e){
            switch(e.keyCode){
                case 38:
                    keyup('up')
                    break;
                case 40:
                    keyup('bottom')
                    break;
                case 37:
                    keyup('left')
                    break;
                case 39:
                    keyup('right')
                    break;
                default:
                    break;
            }
        })
    },
    resetClick(){
        this.props.gameReset()
        this.props.gamePlaying(false)
        clearInterval(t)
    },
    pauseClick(){
        this.props.gamePlaying()
    },
    render(){
        var {snakeObj,grid,fq,error,gameReset,playing,gamePlaying,keyup,dir,autoIncrement,score} =this.props;
        var axisMap =[],axis=[];
        for(var i=0;i<grid;i++){
            axisX[i]=null;
            for(var i=0;i<grid;i++){
                axisMap[i]=axisX.concat()
            }
        };
        snakeObj.forEach(function(item){
            axisMap[item.axis.y][item.axis.x]=item.className;
        })
        var axisMapDiv = axisMap.map(function(item,index){
            <p key={index}>
                {
                    axisMap[index].map(function(item,index){
                        <b key={index} styleName={item}></b>
                    })
                }
            </p>
        });
        if(playing&&!error){
            clearInterval(t);
            t = setInterval(function(){
                this.props.keyup(dir)
            },this.props.fq);
        }else{
            clearInterval(t)
        }
        if(error){
            alert('游戏结束，得分为：'+this.props.score);
            setTimeout(function(){this.resetClick()},this.props.fq);
        }
        return(
            <div styleName="grid">
                {axisMapDid}
                <span>得分：{score}</span>
                <button type="button" onClick={this.resetClick}>重置</button>
                <button type="button" onClick={this.pauseClick}>开始/暂停</button>
            </div>
        )

    }

})
module.exports =Product;