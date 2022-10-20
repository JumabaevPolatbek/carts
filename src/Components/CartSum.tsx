import { useSelector } from "react-redux"
import { getSum } from "../store/actionsFunc"
import { Cart } from "../types";


export default function CartSum(){
    const cartItems= useSelector<Cart[],Cart[]>(state=>state);

    return <div className="carts-sum">
        <p>Всего</p>
        <p>{getSum(cartItems)} $</p>
    </div>
}