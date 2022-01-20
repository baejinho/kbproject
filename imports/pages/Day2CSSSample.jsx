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
 
import "./Day2CSSSample.scss";  
 

export default class Day2CSSSample extends Component {
    
  state = {
    gridtype : "grid",
    imageList :
    [
      {
        image:"/images/image1.jpg",
        imageName:"샘플 그림1",
        imageDesc:"샘플 설명1"
      },
      {
        image:"/images/image2.jpg",
        imageName:"샘플 그림2",
        imageDesc:"샘플 설명2"
      },
      {
        image:"/images/image3.jpg",
        imageName:"샘플 그림3",
        imageDesc:"샘플 설명3"
      },
      {
        image:"/images/image1.jpg",
        imageName:"샘플 그림4",
        imageDesc:"샘플 설명4"
      },
      {
        image:"/images/image2.jpg",
        imageName:"샘플 그림5",
        imageDesc:"샘플 설명5"
      },
      {
        image:"/images/image3.jpg",
        imageName:"샘플 그림6",
        imageDesc:"샘플 설명6"
      },
      {
        image:"/images/image1.jpg",
        imageName:"샘플 그림7",
        imageDesc:"샘플 설명7"
      },
      {
        image:"/images/image2.jpg",
        imageName:"샘플 그림8",
        imageDesc:"샘플 설명8"
      },
      {
        image:"/images/image3.jpg",
        imageName:"샘플 그림9",
        imageDesc:"샘플 설명9"
      }
    ]
   } 

  componentDidMount() { 
  } 

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div style={{display:"flex", flexDirection:"row",  justifyContent:"flex-end"}}>

          <div>
            <Button onClick={()=>{this.setState({gridtype:"grid"})}}>GRID 화면 샘플</Button>
          </div>
          <div>
            <Button onClick={()=>{this.setState({gridtype:"list"})}}>LIST 화면 샘플</Button>
          </div> 
        </div>
        {this.state.gridtype=="grid"?
        <div style={{display:"flex", flexDirection:"row",  justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
          {this.state.imageList.map((item)=>{
            return <div style={{width:"30%", padding:10}}>
            <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
              <img
                style={{ width: "100%" }}
                src={item.image}
              />
              <div style={{fontWeight:"bold", fontSize: 14}}>{item.imageName}</div>
              <div>{item.imageDesc}</div>
            </div> 
          </div> 
          })}


</div>: 
<div style={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
  {this.state.imageList.map((item)=>{
      return <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row", borderBottom:"solid 1px gray"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src={item.image}
      /> 
    </div> 
    <div style={{marginLeft:30}}>
      <div style={{fontWeight:"bold", fontSize: 17}}>{item.imageName}</div>
      <div style={{fontWeight:"bold", fontSize: 14}}>{item.imageDesc}</div>
    </div>
  </div> 
    })}
   


</div>
        } 
     </div>);
  }

}
