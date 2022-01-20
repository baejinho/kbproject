import React, { Component } from 'react';

import {
  Upload,
  Icon,
  Button,
  Switch,
  Input,
  Modal,
  Form,
  Select,
  Table,
  Card,
  Col,
  Row,
  Checkbox
} from "antd";
 
import "./Day2DBSample.scss";  
 

export default class Day2DBSample extends Component {
    
  state = {
    index : 0
  }

  componentDidMount() { 
    console.log("componentDidMount");
  } 

  load=()=>{
    console.log("load method");
    Meteor.call("sample.load", {  }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 
        if(result&&result.index){
          this.setState({index: result.index})
        }else{
          Modal.info({title:"에러가 났습니다."});
        }

      }
    });
  }
  save=()=>{
    Meteor.call("sample.save", { index: this.state.index }, (error, result) => {
      if (error) {
         
      } else {
         Modal.info({title:"저장이 완료 되었습니다."});
      }
    });
  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>State Test Sample<br /> </div>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>State 값 : {this.state.index}</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
            <Button onClick={()=>{
                let {index} = this.state;
                this.setState({index:++index})
              }}>값 증가</Button>
            <Button onClick={()=>{
                let {index} = this.state;
                this.setState({index:index*2})
              }}>값 두배 증가</Button>
            <Button onClick={()=>{
                let {index} = this.state;
                this.setState({index:--index})
              }}>값 감소</Button>
             <Button onClick={()=>{
                   let {index} = this.state;
                this.setState({index:0})
              }}>값 초기화</Button>

             <Button onClick={()=>{
                    
                this.load();
              }}>불러오기</Button>
             <Button onClick={()=>{ 
                this.save()
              }}>저장하기</Button>
          </div>

 
     </div>);
  }

}
