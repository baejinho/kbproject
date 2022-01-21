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
    diaryList: [],
    title:"",
    content:""
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

  save=()=>{
     
    console.log("load method");
    Meteor.call("diary.save", { title:this.state.title, content:this.state.content, image:"/images/paper.jpg" }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 


        this.setState({title:"", content:""},()=>{
          this.load();
        })
         
        
      }
    });

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>일기장 샘플</div>
        <div style={{width:"100%", marginBottom: 50}}>
        <div style={{width:"30%", height:250, position:"relative", margin:5 }}>
            <div style={{position:"absolute", top:0, width:"100%", height: 250, zIndex: 0}}>
                       <img
                         style={{ width: "100%" , height:250}}
                         src={"/images/paper.jpg"}
                       /> 
                      </div>
                      <div style={{position:"absolute", top:0, width:"100%", padding:20, height: 250 , color:"black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"}}>
                      <div style={{width: "100%" ,fontSize:20, marginTop:10}}>
                      <Input 
                      style={{width: "100%" ,background:"transparent", border:"0px solid black"}}
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
                      style={{width: "100%" ,background:"transparent", border:"0px solid black"}}
              rows={4} 
              placeholder="내용를 작성해주세요."
              value={this.state.content}
              onChange={(e)=>{
               console.log(e.target.value)
               this.setState({content:e.target.value})
            }}
            /></div>
            <div style={{marginTop:10}}>
              <Button onClick={()=>{this.save();}}>
                일기 저장
              </Button>
            </div>
                     
                     </div>
                   </div>
         
          
        </div>
        <div style={{display:"flex", flexDirection:"row" , flexWrap:"wrap", alignItems:"center", justifyContent:"flex-start"}}>
        
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
