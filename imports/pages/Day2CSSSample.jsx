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
    gridtype : "grid"
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

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image1.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image2.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image3.jpg"
    />
    샘플 그림
  </div> 
</div> 
<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white" , fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image1.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image2.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image3.jpg"
    />
    샘플 그림
  </div> 
</div> 
<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white",fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image1.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image2.jpg"
    />
    샘플 그림
  </div> 
</div> 

<div style={{width:"30%", padding:10}}>
  <div style={{ width: "100%", color:"white", fontSize:13, textAlign:"center"}}>
    <img
      style={{ width: "100%" }}
      src="/images/image3.jpg"
    />
    샘플 그림
  </div> 
</div> 

</div>: 
<div style={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>

  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image1.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image2.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image3.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 

  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image1.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image2.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image3.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 


  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image1.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image2.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 
  <div style={{width:"100%", padding:10, display:"flex",  flexDirection:"row"}}>
    <div style={{ width: "20%", color:"white", fontSize:15, textAlign:"left"}}>
      <img
        style={{ width: "100%" }}
        src="/images/image3.jpg"
      /> 
    </div> 
    <div style={{marginLeft:30}}>샘플 그림</div>
  </div> 



</div>
        } 
     </div>);
  }

}
