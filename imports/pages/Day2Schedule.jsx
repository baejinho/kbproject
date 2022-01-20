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
 
import "./Day2Schedule.scss";  
 

export default class Day2Schedule extends Component {
    
  state = {
    scheduleList : []
  } 

  componentDidMount() { 
    this.load();
  } 
  load=()=>{
    console.log("load method");
    Meteor.call("schedule.load", {  }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 
        if(result){

          console.log(result);
          this.setState({scheduleList: result})
        }else{
          Modal.info({title:"에러가 났습니다."});
        }

      }
    });
  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>스케줄 샘플</div>
        <div style={{display:"flex", flexDirection:"row",  justifyContent:"flex-end"}}>

          
        </div>
          
         
     </div>);
  }

}
