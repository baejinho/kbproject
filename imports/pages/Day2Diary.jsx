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
 
import "./Day2Diary.scss";  
 
import moment from "moment";

import _ from "lodash";

export default class Day2Diary extends Component {
    
  state = {
    diaryList: []
  } 

  componentDidMount() { 
    this.load();
  } 

  load=()=>{
     
    console.log("load method");
    Meteor.call("diary.load", {  }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 
        if(result){

          console.log(result);
          this.setState({diaryList: result})
        }else{
          Modal.info({title:"에러가 났습니다."});
        }

      }
    });

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>일기장 샘플</div>
        <div style={{display:"flex", flexDirection:"row" , flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
        
          {_.map(this.state.diaryList, (item)=>{
            return <div style={{width:"30%", height:250, position:"relative", margin:5 }}>
            <div style={{position:"absolute", top:0, width:"100%", height: 250, zIndex: 0}}>
                       <img
                         style={{ width: "100%" , height:250}}
                         src={item.image}
                       /> 
                      </div>
                      <div style={{position:"absolute", top:0, width:"100%", padding:20, height: 250 , color:"black"}}>
                      <div style={{fontSize:20}}>{item.diaryTitle}</div>
                      <div style={{fontSize:24, fontWeight:"bold"}}>{item.diaryContent}</div>
                     
                     </div>
                   </div>;
          })}
          
        </div>
          
         
     </div>);
  }

}
