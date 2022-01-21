import React, { Component } from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
  withRouter,
  Link
} from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import { createBrowserHistory } from "history";


import HomePage from "../pages/Home"; 
import Day2 from "../pages/Day2";
import Day2StateSample from "../pages/Day2StateSample";
import Day2DBSample from "../pages/Day2DBSample";
import Day2CSSSample from "../pages/Day2CSSSample";
import Day2Schedule from "../pages/Day2Schedule";
import Day2Diary from "../pages/Day2Diary";
import Day2Photo from "../pages/Day2Photo";
import Day2MoneyManage from "../pages/Day2MoneyManage";

import Day3 from "../pages/Day3";
import Day1 from "../pages/Day1";
   

import 'antd/dist/antd.css';
import "./App.scss"; 

const appHistory = createBrowserHistory();
 
class Header extends Component {
  state = {
    visible: false,
    langtext : "한국어 / KR", 
    email:"",
    password:"", 
    left: false 
  }
 
  renderPC(){

    let color = "#FFFFFF";
    let selectedcolor = "#00ff70";
 
    return ( <div style={{minWidth:1290,width:1290, margin:"0px auto",background:"black", display:"flex",justifyContent:"space-between",
  alignItems: "center"}}>
      
        <div
           style={{fontSize:30,width:180, marginTop: 10, marginRight: 5, fontFamily:"Mark Pro Heavy", color:"white", cursor:"pointer"}}
           onClick={()=>{this.props.history.push("/")}}
           >
             KB {"\n"}
             역량 강화
           </div> 
        
        
          
        <div style={{display:"flex", width: '50%' , height: 110,  flexDirection:"column",
        alignItems: "flex-end", justifyContent:"flex-start"}}>
    
        
        <div style={{display:"flex", marginTop: 20}}>

          <div style={{width:160, marginTop: 10, color: 
          this.props.location.pathname === "/day1"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
            onClick={()=>{
              console.log("day1");
              this.props.history.push("/day1")
              }}>
        
            Day1
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/day2"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                console.log("day2");
                this.props.history.push("/day2")
                }}>
          
            Day2
          </div>
          <div style={{width:160, marginTop: 10, color: 
            this.props.location.pathname === "/day3"?selectedcolor:color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                console.log("day3");
                this.props.history.push("/day3")
                }}>
            Day3
          </div>  


         
          <img
          style={{width:24, height:24,  marginTop: 5, marginRight: 14, marginLeft: 14, cursor:'pointer'}}
          src="/images/profile.png"
          onClick={()=>{
            
          
            
          }}
          />
        </div>
       
       

        </div>
  </div>)
     
  } 
  render() { 

    return (
      <div>
      
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}



class Footer extends Component {
  state = {
  }

  renderPC(){

    return (<div style={{minWidth:1290,width:1290, height: 400, margin:"0px auto",background:"#000000",color:"#FFFFFF", display:"flex", justifyContent:"center",
    alignItems: "center", position:"relative"}}>
          <div
          style={{width:170, marginTop: 10, marginRight: 50, fontSize:25}} 
          onClick={()=>{this.props.history.push("/")}}
          >
          KB
          </div>
          <div>
            
            <div  style={{width:1000,display:"flex", marginTop:10, justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
                <div style={{fontSize:16, color:"#ccc", marginTop:5, fontFamily:"Noto Sans"}}>
              대표번호 000-000-0000&nbsp;&nbsp;&nbsp;<br />
              E-MAIL baeno@nate.com &nbsp;&nbsp;&nbsp;<br /> 
              <span style={{color:"#666666", fontFamily:"Mark Pro Heavy"}}>Copyright by 배진호, All Right Reserved.</span><br />
                </div>
 
               
              </div>
              <div  style={{width:220, display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                <div style={{width:220, display:"flex", alignItems:"flex-end"}}>
                    
                  <div style={{width:100, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer"}}
                   >
                  이용약관
                  
                  </div>

                  <div style={{width:130, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer" }}
                   >
                  
                  개인 정보 보호
                        
                  </div>
                </div>

                <div style={{width:161, display: 'flex',marginLeft:10, marginTop:20, justifyContent:"flex-end"}}>
                 
                <img
                style={{width:40, height:40, marginRight: 4}}
                src="/images/insta.png"
                onClick={()=>{this.props.history.push("/")}}
                />
                </div>
              </div>
             

             
            </div>
          </div>
          
            
    </div>)
     
  } 
  render() { 

    return (
      <div>
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}



 class App extends Component {
  state = {  
  }  
  render() {
    console.log("render", this.props.user);  
    let user = this.props.user;
    return ( 
      <Router history={appHistory}>
          <Route path="/"  
          render={(props) => <Header {...props} 
           />}
            /> 
          <Switch>
            <div className="app"> 
            <Route exact path="/" 
            render={(props) => <HomePage {...props} 
            />}
            /> 

            <Route exact path="/day1" 
            render={(props) => <Day1 {...props}  
            />}
            />  
            <Route exact path="/day2" 
            render={(props) => <Day2 {...props}  
            />}
            />  

            <Route exact path="/day2statesample" 
            render={(props) => <Day2StateSample {...props}  
            />}
            />  

            <Route exact path="/day2dbsample" 
            render={(props) => <Day2DBSample {...props}  
            />}
            /> 

            <Route exact path="/day2csssample" 
            render={(props) => <Day2CSSSample {...props}  
            />}
            /> 

            <Route exact path="/day2schedule" 
            render={(props) => <Day2Schedule {...props}  
            />}
            /> 

            <Route exact path="/day2diary" 
                        render={(props) => <Day2Diary {...props}  
                        />}
                        /> 

            <Route exact path="/day2money" 
                        render={(props) => <Day2MoneyManage {...props}  
                        />}
                        /> 
             <Route exact path="/day2photo" 
                        render={(props) => <Day2Photo {...props}  
                        />}
                        /> 
                        



            <Route exact path="/day3" 
            render={(props) => <Day3 {...props}  
            />}
            />   
 
            </div>
            
            </Switch>
            <Route path="/" component={Footer} {...this.props} /> 
      </Router> 
    );
  }
}



export default withTracker(props => { 
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  return { 
    user: !loggingIn && user 
  };
})(App);
 