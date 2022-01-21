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
  Checkbox,
  DatePicker
} from "antd";
 
import moment from "moment";

import _ from "lodash";

import "./Day2Schedule.scss";  
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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
 

  save=()=>{
     
    console.log("load method");
    Meteor.call("schedule.save", { title:this.state.title, 
      content:this.state.content, status: "ready", startDate:this.state.startDate , endDate:this.state.endDate}, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 


        this.setState({title:"", content:"",  startDate:new Date(),  endDate:new Date()},()=>{
          this.load();
        })
         
        
      }
    });

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>스케쥴 샘플</div>
        <div style={{width:"100%", marginBottom: 50}}>
        <div style={{width:"100%", height:200, position:"relative", margin:5 }}>
            <div style={{position:"absolute", top:0, width:"100%", height: 200, zIndex: 0, backgroundColor:"black"}}>
                        
                      </div>
                      <div style={{position:"absolute", top:0, width:"100%", padding:30, height: 200 , color:"black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"}}>
                      <div style={{width: "100%" ,fontSize:20, marginTop:10}}>
                      <Input 
                      style={{width: "100%" ,background:"transparent",color:"white", border:"0px solid black"}}
            placeholder="제목를 작성해주세요."
            onChange={(e)=>{
               console.log(e.target.value)
               this.setState({title:e.target.value})
            }}
            value={this.state.title}
          />
                      </div>
                      <div style={{width: "100%" ,fontSize:24, fontWeight:"bold", marginTop:10}}>
                      <Input.TextArea
                      style={{width: "100%" ,background:"transparent", color:"white",border:"0px solid black"}}
              rows={2} 
              placeholder="내용를 작성해주세요."
              value={this.state.content}
              onChange={(e)=>{
               console.log(e.target.value)
               this.setState({content:e.target.value})
            }}
            /></div> 
               
              <div style={{width: "100%" ,fontSize:20, marginTop:10, color:"white"}}>
                날짜를 선택해주세요 :
                <RangePicker onChange={(date, dateString)=>{
                    console.log(date, dateString);
                    if(date&&date.length==2){
                      this.setState({startDate:date[0].toDate(), endDate:date[1].toDate()})
                    }
                    
                }} />
              </div>
            <div style={{marginTop:10}}>
              <Button onClick={()=>{this.save();}}>
                저장
              </Button>
            </div>
                     
                     </div>
                   </div>
         
          
        </div>
        <div style={{display:"flex", flexDirection:"row" , flexWrap:"wrap", alignItems:"center", justifyContent:"flex-start"}}>
        
          {_.map(this.state.scheduleList, (item)=>{
            return <div style={{width:"100%", height:200, position:"relative", marginTop: 15 }}>
            <div style={{position:"absolute", top:0, width:"100%", height: 200, zIndex: 0, backgroundColor:"#BBB"}}>
                        
                      </div>
                      <div style={{position:"absolute", top:0, width:"100%", padding:30, height: 250 , color:"black"}}>
                      <div style={{fontSize:20}}>{item.scheduleTitle}</div>
                      <div style={{fontSize:24, fontWeight:"bold"}}>{item.scheduleontent}</div>
                     
                      <div style={{fontSize:15, fontWeight:"bold", width:"100%", textAlign:"right", marginTop : 5}}>{moment(item.scheduleStartDate).format("YYYY.MM.DD hh:mm")}~{moment(item.scheduleEndDate).format("YYYY.MM.DD hh:mm")}</div>
                      <div style={{fontSize:15, fontWeight:"bold", width:"100%", textAlign:"right", marginTop : 5}}>{item.status}</div>
                     
                     </div>
                   </div>;
          })}
          
        </div>
          
         
     </div>);
  }
}
