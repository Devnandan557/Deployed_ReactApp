//import logo from './logo.svg';

import './App.css';
import Joke from './components/Joke';
import jokesData from './components/jokesData';




export default function App() {
    const jokeElements = jokesData.map(function(elements){
        return <Joke key={elements.id}
        elements={elements}
        />
    })

    
    
  return (
    <div>
      {/* <h1>hello world</h1> */}
      {jokeElements}
    </div>

  );
}
