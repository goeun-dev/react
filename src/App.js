import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/CountHookComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CountHookComponent></CountHookComponent>
      </header>
    </div>
  );
}

export default App;
