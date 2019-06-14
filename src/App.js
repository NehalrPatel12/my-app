import React, { Component } from 'react';
import Header from './components/headerComponents/header';
import Homepage from './components/homePage';
import './App.css';

class App extends Component {
  render() {
      let links = [
          {lable:'Home', link:'#Home', active:true},
          {lable:'About Us', link:'#About'},
          {lable:'Skills', link:'#Skill'},
          {lable:'Experience', link:'#Experience'},
          {lable:'Education', link:'#Education'},
      ];
    return (
      <div className="App">
        <Header links={links} />
        <Homepage />
        
      </div>
    );
  }
}

export default App;
