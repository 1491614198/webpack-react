/**
 * Created by NEWBAND on 2017/3/17.
 */
import React from 'react';
import '../css/navbar.css';

let count = 1;
class NB extends React.Component{
    constructor(props){
        super(props);
    }
    handles(n) {
        count=n;

         {count==1?console.log("one"):console.log("two")}
    }


    render(){

        return(
            <div>
                <div className="navbar_back">
                     <div className="navbar_one" onClick={this.handles.bind(this,1)}>
                         首页
                     </div>
                    <div className="navbar_two" onClick={this.handles.bind(this,2)}>
                        我的订单
                    </div>
                    <div className="navbar_three" onClick={this.handles.bind(this,3)}>
                        加盟合作
                    </div>
                    {count==1?
                        (<div>
                            <div>茄子</div>
                            <div>菠萝</div>
                        </div>):
                        (count==2?
                            <div>
                                <div>牛肉</div>
                                <div>羊肉</div>
                            </div>:
                                (<div>
                                    <div>麻瓜</div>
                                    <div>阿里波特</div>
                                </div>)
                        )
                    }

                </div>



            </div>
        )
    }
}

export default NB;