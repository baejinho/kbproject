import React, { Component } from 'react';

 
import "./Day1.scss";  
 

export default class Day1 extends Component {
    

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>AWS, GCP 서버에 대한 이해 및 기초<br /><br /> </div>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>AWS란?</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://aws.amazon.com/ko/console/">https://aws.amazon.com/ko/console/</a> <br />
          아마존에서 제공하는 클라우드 서버
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>GCP란?</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://cloud.google.com/">https://cloud.google.com/</a>  <br />
          구글에서 제공하는 클라우드 서버
          </div>
           <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>Azure란? </div>
           <div style={{ fontSize: 20, marginTop:20}}>
           <a href="https://azure.microsoft.com/ko-kr/">https://azure.microsoft.com/ko-kr/</a> <br />
            마이크로 소프트에서 제공하는 클라우드 서버
          </div>  
     </div>);
  }

}
