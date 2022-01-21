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
 
import moment from "moment";

import _ from "lodash";

import "./Day2Photo.scss";  
 

export default class Day2Photo extends Component {
    
  state = {
    photoList: [],
    yearList:['2021','2020','2019','2018'],
    curImage:null 
  } 

  componentDidMount() { 
    this.load();
  } 

  load=()=>{
     
    console.log("load method");
    Meteor.call("photo.load", {  }, (error, result) => {
      if (error) {
        Modal.info({title:"에러가 났습니다."});
      } else { 
        if(result){

          console.log(result);
          this.setState({photoList: result})
        }else{
          Modal.info({title:"에러가 났습니다."});
        }

      }
    });

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>사진첩 샘플</div>
        <div style={{}}>
          
           
           {_.map(this.state.yearList, (yearItem)=>{
             return <div>
                <div style={{fontSize:45, marginTop:20}}>{yearItem}년</div>
                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                {_.map(this.state.photoList, (item)=>{
                  if(moment(item.createdAt).format("YYYY")==yearItem){
                    return <div 
                    onMouseOver={()=>{
                       this.setState({curImage:item._id})
                    }}
                    onMouseOut={()=>{
                      this.setState({curImage:null})
                    }}

                    style={{width: "50%",  height:300, position:"relative", cursor:"pointer"}}>

                    <img
                      style={{ width: "100%" , height:300}}
                      src={item.image}
                    /> 
                    {this.state.curImage&&this.state.curImage._str==item._id._str?<div style={{position:"absolute", width:"100%", top:0,  height:300,paddingTop: 80, backgroundColor:"black",color:"white", textAlign:"center", opacity :0.4 }}>
                     <span style={{fontSize:18, color:"white", fontWeight:"bold"}}>{item.imageTitle}</span><br />
                     <span style={{fontSize:16, color:"white"}}>{item.imageDesc}</span><br />
                     {moment(item.createdAt).format("YYYY.MM.DD")}
                    </div>:<div style={{position:"absolute"}}></div>}
                    
                  </div>
                  }else{
                    return <div></div>
                  }
                 
                 })}
                 </div>

             </div>
           })}
          
        </div>
          
         
     </div>);
  }

}
