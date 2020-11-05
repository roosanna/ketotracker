import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Food = ({foods}) => {
  return (
    <div>
      {foods.map((food) => 
        <span key={food.id}>
        <h4>{food.name}</h4>
      </span>
      )}
    </div>
  )
}


const App = () => {
  const foods = [
    {
      name: 'bacon',
      id: 1,
      nutrition: {
        calories: 100,
        fat: 20,
        protein: 10,
        carbs: 0,
        fiber: 0,
      }
    },
    {
      name: 'eggs',
      id: 2,
      nutrition: {
        calories: 60,
        fat: 10,
        protein: 5,
        carbs: 0,
        fiber: 0,
      }
    }
  ]


  return (
    <div>
      <Food foods={foods}/>
    </div>
  )
}



ReactDOM.render(<App />,document.getElementById('root'))