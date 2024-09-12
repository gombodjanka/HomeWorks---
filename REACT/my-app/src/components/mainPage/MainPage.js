import { ProductCard } from "../productCard/ProductCard";
import style from './MainPage.module.css'

export function MainPage ({menu}) {
   return (
        <div className={style.mainPage}>
            <h1>МЕНЮ</h1>
            <div className={style.menu}>   
                {menu.map((item, index) => ( 
                    <ProductCard key={index} item={item}/>
                ))}
            </div>
        </div>
   )
}