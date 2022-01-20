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
 
import "./Day2MoneyManage.scss";  
 

export default class Day2MoneyManage extends Component {
    
  state = {
    moneyList:[]
  } 

  componentDidMount() { 
    this.load();
  } 

  load=()=>{
    console.log("load method");
    Meteor.call("moneyManage.load", {  }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 
        if(result){

          console.log(result);
          this.setState({moneyList: result})
        }else{
          Modal.info({title:"에러가 났습니다."});
        }

      }
    });
  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>가계부 샘플</div>
        <div style={{display:"flex", flexDirection:"row",  justifyContent:"flex-end"}}>

          
        </div>
          
         
     </div>);
  }

}
