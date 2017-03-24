import React from 'react';

class Practice extends React.Component{
    constructor(props){
        super(props)
    }
    handleChange(item){
        console.log(item)
    }
    render(){
        let showArray = ['hello1','hello2','hello3'];
        let newArray = [];
        for(let i=0;i<showArray.length;i++){
            var item=showArray[i];
            return newArray.push(<li onClick={this.handleChange.bind(this.item)}>{item}</li>)
        }
        return(
            <ul>
                {newArray}
            </ul>
        )
    }
}
export default Practice;