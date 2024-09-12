import style from './Cart.module.css'
import { useCart } from '../../store/cart';

export function Cart (item) {
  const {cart, removeItem} = useCart();
  return(
      <div>
          <h5> Корзина:</h5>
          {cart.length > 0 ? (
           <>
            <ul className={style.cart}>
              {cart.map((item) => (
                <li 
                  className={style.cartList}
                  key={item}
                >
                  {item.name} - {item.price} руб
                  <button
                    className={style.delete}
                    onClick={() => {
                      removeItem(item.name);
                  }}> 
                    Х 
                  </button>
                </li>
              ))}
            </ul> 
            {/* <div className='total-cost'>Итого: {cartSum} руб</div>  */}
          </>  
          ):(
          <div className={style.emptyCart}>
            В корзине ничего нет
          </div>
        )}
      </div>
  )
}