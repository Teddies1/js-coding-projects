import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List({ animals }) {
    if (!animals) {
      return <div>Loading...</div>;
    }

    if (animals.length === 0) {
      return <div>There are no animals in the list!</div>;
    }

    return (
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
}
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}
function App() {
  const [count, setCount] = useState(0)
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const handleButtonClick = () => {
      window.location.href = "https://www.google.com";
  };

  return (
    <> 
      <div>
        <Button handleClick={handleButtonClick} />
      </div>
      <h1>Jenny moment</h1>
      <div>
        <h1>Animals: </h1>
        <ul>
            <List animals={animals} />
        </ul>
      </div>
    </>
  )
}

export default App
