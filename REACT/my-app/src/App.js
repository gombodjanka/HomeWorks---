import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState ([]);
  const cartSum = cart.reduce ((acc, item) => acc + item.price, 0);
  let menu = [
    {
      name: "Спагетти Болоньезе",
      ingredients: ["Лук","Оливковое масло","Мясной фарш","Помидоры в собственном соку","Чеснок","Сладкий перец", "Приправы","Спагетти", "Тертый твердый сыр"],
      price: 650,
      image: "https://i.pinimg.com/564x/4f/b9/f2/4fb9f2a9698bbb1977c2494b92035a1f.jpg"
    },
    {
        name: "Шакшука",
        ingredients: ["Лук","Оливковое масло","Помидоры","Яйца","Томатная паста","Чеснок","Сладкий перец","Приправы"],
        price: 650,
        image: "https://i.pinimg.com/564x/d7/3b/37/d73b376f079389359325ab94b67d9909.jpg"
    },
    {
        name: "Сырники",
        ingredients: ["Творог","Мука","Яйца","Сахар","Масло","Соль"],
        price: 350,
        image: "https://i.pinimg.com/564x/04/42/58/044258902613794036b47c199225be90.jpg"
    }
  ]
  return (
    <div className="App">
      <div className='flex-container'>
        <div className='main-page'>
          <h1>МЕНЮ</h1>
            <div className='menu'>   
              {menu.map (function (item) { 
                return (
                  <div className='card' key={item.name}>
                    <img src={item.image} alt={item.name}/>
                    <h2>{item.name}</h2>
                    <h3>Ингредиенты: {item.ingredients.join(', ')}</h3>
                    <div className="button-container">
                      <span>{item.price}</span>
                      <button 
                        className="button"
                        onClick={() => {
                          setCart([...cart, item]);
                          console.log(cart)
                        }}
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                );  
              })}
          </div>
        </div>
        <div className='right-page'>
          <h5> Корзина:</h5>
          {cart.length > 0 ? (
            <>
              <ul className='basket'>
                {cart.map((item) => (
                  <li>
                    {item.name} - {item.price} руб
                  </li>
                ))}
              </ul> 
              <div className='total-cost'>Итого: {cartSum} руб</div> 
            </>  
          ):(
            <div style={{ 
              fontFamily: "Trebuchet MS, sans-serif",
              fontWeight: "bold",
              fontSize: "20px"
            }}>
            В корзине ничего нет</div>
          )}
        </div>
      </div>  
      {/* <Button
          text = "count"
          style = {{
            backgroundColor: "green",
          }}
        />   */}
    </div>
  );
}

export default App;
