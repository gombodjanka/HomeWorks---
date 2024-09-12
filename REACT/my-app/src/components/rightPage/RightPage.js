import style from './RightPage.module.css'
import { Cart } from '../cart/Cart'

export function RightPage () {
    return (
        <div className={style.rightPage}>
          <Cart/>
        </div>
    )
}