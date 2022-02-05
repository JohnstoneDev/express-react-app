import logo from './logo.svg';
import './App.css';
import React,{ Component } from "react";
import Header from './header.js'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = { apiResponse : ""};
  }


  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then( res => res.text())
        .then( res => this.setState({ apiResponse : res}))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Send & Receive API Data </h1>
      <p className="App-intro">{this.state.apiResponse}</p>
      <Header/>
      </header>
      </div>
    )
  }
}


export default App;
