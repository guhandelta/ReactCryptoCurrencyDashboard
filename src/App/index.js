import React from 'react';
import WelcomeMsg  from './WelcomeMsg';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';


class App extends React.Component{
  render(){
    return(
      <AppLayout>
        <AppBar />
        <WelcomeMsg />
      </AppLayout>
    );
  }
}

export default App;
