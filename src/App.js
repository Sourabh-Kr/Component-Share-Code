import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter';
import { ClickCounterTwo } from './component/ClickCounterTwo';
import { HoverCounterTwo } from './component/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <Counter render={(count,incrementCount)=>
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>}>
      </Counter>
      <Counter render={(count,incrementCount)=>
      <HoverCounterTwo count={count} incrementCount={incrementCount}/>}>
      </Counter>
      
    </div>
  );
}

export default App;
