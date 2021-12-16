import './App.css';
import Title from './components/Title';
import Image from './components/Image';
import SportsDescription from './components/SportsDescription';
import SportButton from './components/SportButton';
import {useState} from 'react';

function App() {
  const sportData =[
    "Ice Hockey",
    "Basketball",
    "Soccer",
    "Baseball",
    "Football",
  ]
  const [buttonText, setButtonText] = useState('Click your favorite sport');
  return (
    <div className="App">
      <Title headerText='Canadian Sports'/>
      <Image />
      <SportsDescription />
      <div>
        <SportButton sportData={sportData} setButtonText={setButtonText}/>
        <h1>Favourite Sport</h1>
        <h4>{buttonText}</h4>
      </div>
    </div>
  );
}

export default App;
