import './App.css';
import { MainPage } from './components/mainPage/MainPage';
import { RightPage } from './components/rightPage/RightPage';

function App() {
  
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
        <MainPage menu = {menu}/>
        <RightPage/>
      </div>  
    </div>
  );
}

export default App;
