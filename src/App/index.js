import React from 'react';
import WelcomeMsg from './WelcomeMsg';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider'; // AppProvider is one among the multiple exports and is not a default export

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMsg />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
