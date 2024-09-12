import {useCart} from "../../store/cart"
import style from "./ProductCard.module.css"

export function ProductCard({item}) {
    const {addItem} = useCart();
    return (
        <div className={style.card} key={item.name}>
            <img src={item.image} alt={item.name} className={style.image}/>
            <h2>{item.name}</h2>
            <h3>Ингредиенты: {item.ingredients.join(', ')}</h3>
            <div className={style.buttonContainer}>
                <span>{item.price}</span>
                <button 
                    className={style.button}
                    onClick={() => {
                        addItem(item);
                    }}
                >
                    В корзину
                </button>
            </div>
        </div>
    )
}