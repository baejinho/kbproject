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
 
import "./Day2.scss";  
 

export default class Day2StateSample extends Component {
    
  state = {
    index : 0
  }

  componentDidMount() { 
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
          </div>

 
     </div>);
  }

}
