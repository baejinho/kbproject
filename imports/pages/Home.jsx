import React, { Component } from 'react';

 
import "./Home.scss"; 

export default class Home extends Component {
  state = {
     
  }

  componentDidMount() { 
  }
  fetchReleases = () =>{
    
  } 
  render() { 

    return (
      <div style={{color:"white", height:700, padding:150}}> 
        <div>
          본 사이트는 강의용 사이트 입니다.
        </div>

        <div style={{ width: "100%", padding:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
          <img
            style={{ width: 500 }}
            src="/images/computer.jpg"
          />
        </div>

      </div>
    );
  }
}
