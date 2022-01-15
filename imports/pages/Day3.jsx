import React, { Component } from 'react';

 
import "./Day3.scss";  
 

export default class Day3 extends Component {
    

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>AWS 기반 - DevOps 의 이해 (운영/배포)<br /><br /> </div>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>CI/CD란?</div>
     
          <div style={{ fontSize: 20, marginTop:20}}>
          CI/CD는 애플리케이션 구축, 테스트 및 배포에 자동화를 적용하여 개발 및 운영 활동과 팀 간의 격차를 해소
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20}}>jira란?</div>
          
          <div style={{ fontSize: 20, marginTop:20}}> 
          <a href="https://www.atlassian.com/ko">https://www.atlassian.com/ko</a> <br />
          문제 추적 및 프로젝트 관리에 사용하는 툴
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20}}>jenkins란?</div>
          
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://www.jenkins.io/">https://www.jenkins.io/</a> <br />
          빌드 빛 배포 자동화 툴
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20}}>pm2란?</div>
          
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://www.npmjs.com/package/pm2">https://www.npmjs.com/package/pm2</a> <br />
           PM2는 로드 밸런서가 내장된 Node.js 애플리케이션용 프로덕션 프로세스 관리자
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20}}>github란?</div>
          
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://github.com/">https://github.com/</a> <br />
          소스를 개발 유지보수 관리할 수 있도록 하는 곳
          </div>

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20}}>bitbucket란?</div>
          
          <div style={{ fontSize: 20, marginTop:20}}> 
          <a href="https://bitbucket.org/product">https://bitbucket.org/product</a> <br />
          소스를 개발 유지보수 관리할 수 있도록 하는 곳(아틀라시안 제품)
          </div>
         
     </div>);
  }

}
