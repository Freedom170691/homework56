import {useState} from "react";
import {nanoid} from "nanoid";
import meatImage from './assets/meat.jpg';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salat.png';
import baconImage from './assets/bacon.png';
import './App.css';
import './Burger.css';


const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 5, image: saladImage},
  {name: 'Bacon', price: 30, image: baconImage},
]
function App() {

  return (
    <div className="App">
        <div className="BoxIngredients">
          <h3>Ingredients</h3>
        </div>
        <div className="BoxBurger">
            <h3>Burger</h3>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Salad"></div>
                <div className="Cheese"></div>
                <div className="Meat"></div>
                <div className="BreadBottom"></div>
                <span>Price: </span>
            </div>
        </div>
    </div>

  );
}

export default App;
