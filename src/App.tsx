import React from 'react';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="flex">
      <div className="row">
        <Card  title="Kidist" paragraph="hello world" ></Card> 
          <Card  title="Asad Saeed" paragraph="hello world" ></Card>
         
          
      </div>
    </div>
  );
}

export default App;
