import {useState} from "react";
import meatImage from './assets/meat.jpg';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salat.png';
import baconImage from './assets/bacon.png';
import './App.css';
import './Burger.css';


const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage, index: 0},
  {name: 'Cheese', price: 20, image: cheeseImage, index: 1},
  {name: 'Salad', price: 5, image: saladImage, index: 2},
  {name: 'Bacon', price: 30, image: baconImage, index: 3},
]
function App() {

    const [ingredients, setIngredients] = useState([
        // {name:'Meat', count: 0},
        // {name:'Cheese', count: 0},
        // {name:'Salad', count: 0},
        // {name:'Bacon', count: 0},
    ])

    const onClick = index => {
        const ingrid = INGREDIENTS.map(ing => {
            if (ing.index === index) {
                ingredients.push({name: ing.name, count: 0})
                // console.log(ing.index)
                return ing;
            }
            // return ing
        });

        const ingredientsCopy = ingredients.map(ing => {
            if (INGREDIENTS[index].name === ing.name) {
                return {
                    ...ing,
                    count: ing.count + 1,
                }
                console.log(INGREDIENTS[index].name)
            }
        })


        // setIngredients(ingredientsCopy);
        console.log(ingredientsCopy)
    }

  return (
    <div className="App">
        <div className="BoxIngredients">
          <h3>Ingredients</h3>
            {
                INGREDIENTS.map(ingredient => {
                    return (
                        <div className="Item"
                            key={ingredient.index}
                        >
                            <div className="MeatIngredient" onClick={() => onClick(ingredient.index)}>
                                <img width="80px" height="80px" src={ingredient.image} alt=""/>
                            </div>
                            <span>{ingredient.name}</span>
                            <span className="AmountIngredient"> x </span>
                            <button type="button">Delete</button>
                        </div>
                    )
                })
            }

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
