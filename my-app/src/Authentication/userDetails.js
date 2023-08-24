import React, { Component } from 'react'

export default class userDetails extends Component {
  constructor(props){
    super(props);
    this.state={
        userData: "",
    }
  }
    componentDidMount(){
        fetch("http://localhost:3001/userData",{
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-Type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringfy({
                token:window.localStorage.getItem("token"),
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data, "userData");
            this.setState({userData: data.data});
        });
    }
  render() {
    return (
      <div>
        Name<h1>{this.state.userData.name}</h1>
        Email<h1>{this.state.userData.email}</h1>
      </div>
    )
  }
}