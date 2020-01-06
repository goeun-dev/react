import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import CountBoard from './components/day1/CountBoard';
import CountComponent from './components/day1/CountComponent';
// import CountHookComponent from './components/day1/CountHookComponent';
// import QuizComponent from './components/quiz/QuizComponent';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';
import SWTest from './components/day3/SWTest';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <SWTest></SWTest>

        <ItemComponent></ItemComponent>

        <LoopEx></LoopEx>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App