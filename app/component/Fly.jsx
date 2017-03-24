import React from 'react';
class FlyTime extends React.Component{
    flyStart(){
        let flyInfo = this.props.flyInfo;
        let flyStartTime = flyInfo.atd||flyInfo.etd||flyInfo.std;
        return flyStartTime;
    }
    flyEnd(){
        let flyInfo = this.props.flyInfo;
        let flyEndTime = flyInfo.ata||flyInfo.eta||flyInfo.sta;
        return flyEndTime;
    }
    decideShow(){
        let startdiff = this.flyStart();
        let startdiffFormat = new Date(startdiff)
        let nowTime = new Date();
        if(nowTime<startdiffFormat){
            return true;
        }else{
            return false;
        }
    }
    render(){
        let decideShow = this.decideShow()
        let container
        if(decideShow){
            container=(
                <div>
                    <span>起飞机起飞还有</span>
                    <CountDown endTime={this.flyStart()} type="sub"/>
                </div>
            )
        }else{
            container=(
                <div>
                    <span>飞机已飞</span>
                    <CountDown endTime={this.flyStart()} type="add"/>
                    <span>预计到达时间还有</span>
                    <CountDown endTime={this.flyEnd()} type="sub"/>
                </div>
            )
        }
        return(
            <div>
                {container}
            </div>
        )
    }
}
class CountDown extends React.Component{
     static get defaultProps(){
         return{
             endTime:'2017-03-10',
             type:'sub'
         }
     }
     constructor(props){
         super(props)
         this.state={
             countDown:''
         }
     }
     formatSeconds(date,format){
         if(Object.prototype.toString.call(date)!=="[object Date]"){
             date=new Date(date);
         }
         var map={
             "M":date.getMonth()+1,
             "d":date.getDate(),
             "h":date.getHours(),
             "m":date.getMinutes(),
             "s":date.getSeconds(),
             "q":Math.floor((date.getMonth()+3)/3),
             "S":date.getMilliseconds()
         };
         format = format.replace(/([yMdhmsqS])+/g,function(all,t){
             var v =map[t];
             if(v!==undefined){
                 if(all.length>1){
                     v= '0'+v;
                     v=v.substr(v.length-2);
                 }
                 return v;
             }else if(t==='y'){
                 return (date.getFullYear()+'').substr(2-all.length);
             }
             return all;
         });
         return format;
     }
     diffTimeSecond(){
         let nowTime = new Date();
         let endTimeSecond = new Date(this.props.endTime)
         let resultTimeSecond
         if(this.props.type==='sub'){
             resultTimeSecond = endTimeSecond - nowTime -28800000
         }else{
             resultTimeSecond = nowTime - endTimeSecond -28800000
         }
         return resultTimeSecond
     }
     formatCount(){
         let formatResult = this.formatSeconds(this.diffTimeSecond(),'hh:mm:ss')
         return formatResult
     }
     componentDidMount(){
         setInterval(
             function(){
                 this.setState({
                     countDown:this.formatCount()
                 })
             }.bind(this),1000
         )
     }
     render(){
         return(
             <span>
                 {this.state.countDown}
             </span>
         )
     }
}

class ShowSlider extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <div>
                    {
                        this.props.silderImage.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <img src={item.cover_image} alt=""/>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
class NavigationItem extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a href="">
                            <img src="" alt=""/>
                            <div>咨询头条</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="" alt=""/>
                            <div>目的地</div>
                        </a>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        )
    }
}

class ModuleTitle extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <a href="">{this.props.titleMessage}</a>
                    <label>{this.props.titleEnglish}</label>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
            </div>

        )
    }
}
class Shadeshow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstVideoMessage:{},
            otherVideoMessage:[]
        }
    }
    componentWillReceiveProps(nextProps){
        var gg= nextProps.showVideo;
        this.setState({
            firstVideoMessage:gg[0],
            otherVideoMessage:[]
        })
    }
    componentWillReceiveProps(nextProps){
        var gg=nextProps.showVideo;
        this.setState({
            firstVideoMessage:gg[0],
            otherVideoMessage:gg.slice(1)
        })
    }
    render(){
        return(
            <div>
                <ModuleTitle titleMessage="视频" titleEnglish="THE GREAT VIDEO"/>
                <div>
                    <div>
                        <section>
                            <img src="" alt=""/>
                        </section>
                    </div>
                    <section>
                        <p>{this.state.firstVideoMessage.title}</p>
                    </section>
                </div>
                <div>
                    {
                        this.state.otherVideoMessage.map(item=>{
                            return(
                                <section key={item.index}>
                                    <img src="" alt=""/>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
class ZhuanQu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showAirlineTopLeft:{},
            showAirlineTopRight:{},
            showAirlineBottom:[]
        }
    }
    componentWillReceiveProps(nextProps){
        let tt=nextProps.showAirline;
        this.setState({
            showAirlineTopLeft:tt[0],
            showAirlineTopRight:tt[1],
            showAirlineBottom:tt.slice(2)
        })
    }
    render(){
        return(
            <div>
                <ModuleTitle2 titleMessage="深航专区" titleEndlish="THE GREAT " colors="white"/>
                <div>
                    <div>
                        <div>

                        </div>
                        <Shadeshow titleName={this.state.showAirlineTopLeft.title}/>
                    </div>
                    <div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.showAirlineBottom.map((item,i)=>{
                            return (
                                <div>
                                    <section>
                                        <img src="" alt=""/>
                                    </section>
                                    <Shadeshow titleName={item.title} class_name="zq-bottom"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class Zonghe extends React.Component{
    constructor(props){
        super(props);
        this.setState={
            zongheTopLeft:{},
            zongheTopMiddle:[],
            zongheTopRight:{},
            zongheBottom:[]
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            zongheTopLeft:nextProps.showRecommend[0],
            zongheTopMiddle:nextProps.showRecommend.silce(1,3),

        })
    }
    render(){
        return(
            <div>
                <ModuleTitle2 titleMessage="综合专区" titleEnglish=""/>
                <div>
                    <section>
                        <img src="" alt=""/>
                        <Shadeshow titleName={this.state.zongheTopLeft.title}/>
                    </section>
                    {
                        this.state.zongheTopMiddle.map(item=>{
                            return(
                                <section>
                                    <img src="" alt=""/>
                                    <Shadeshow titleName={item.title}/>
                                </section>
                            )
                        })
                    }
                    <div>
                        <section>
                            <img src="" alt=""/>
                            <Shadeshow titleName={this.state.zongheTopRight.title}/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

class Sginboard extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <img src="" alt=""/>
                    <div></div>
                </li>
                <li>
                    <img src="" alt=""/>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </li>
            </ul>

        )
    }
}

class IndexBottom extends React.Component{
    clickBtn(){
        var tt=JSON.stringify({
            "feedback":'"'+this.refs.feedback_con.value+'"',
            "contact":'"'+this.refs.tel_num.value+'"',
            "name":'"'+this.refs.name.value+'"'
        });
        console.log(tt);
        fetch(config.WW+"api/r/r",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "feedback":'"'+this.refs.feedback_con.value+'"',
                "contact":'"'+this.refs.tel_num.value+'"',
                "name":'"'+this.refs.name.value+'"'
            })
        }).then(req=>req.json())
            .then(json=>(console.log(json)))
            .catch(error=>(console.log(error)))
    }
    render(){
        return(
            <div>
                <div>
                    <ul>
                        <img src="" alt=""/>
                        <span></span>
                    </ul>
                </div>
            </div>
        )
    }

}

class ModuleTitle2 extends React.Component{
    constructor(props){
        super(props);
        let thiss=this;
        thiss.state={
            ifLoading:true,
            ifFixed:false
        };
    }
    handleData(json){
        if(jsons.code==0){
            this.setState({
                show_flight:jsons.data.flight,
                show_weather:jsons.data.weather,
                show_focus_pic:jsons.data.focus_pic,
                show_video:jsons.data.video
            })
        }
    }
}































