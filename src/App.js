import './App.css';
import Title from './components/Title';
import Image from './components/Image';
import SportsDescription from './components/SportsDescription';
import SportButton from './components/SportButton';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Title headerText='Canadian Sports'/>
      <Image />
      <SportsDescription />
      <div>
        <SportButton label="Ice Hockey" />
        <SportButton label="BasketBall" />
        <SportButton label="Soccer" />
      </div>
    </div>
  );
}

export default App;
