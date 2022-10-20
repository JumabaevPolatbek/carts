import { useDispatch } from "react-redux"
import {Cart} from "../types"
import {add,remove,decrease} from '../store/actionsFunc'
type Props={
    cart:Cart
}


export default function Tbody({cart}:Props){
    const dispatch =useDispatch()
    return (
        <tr>
            <td>
                <button 
                onClick={()=>dispatch(remove(cart.id))}
                >X</button>
                </td>
            <td>
                {cart.name}
                </td>
            <td>
                <img 
                src={`${cart.img}`} 
                alt={`${cart.img}`} />
                </td>
            <td>
                {cart.price}
                $
                </td>
            <td>
                <button 
                className="decrease" 
                onClick={()=>dispatch(decrease(cart.id))}
                >-</button>
                <span 
                className="qty">
                    {cart.qty}
                    </span>
                <button 
                className="increase" 
                onClick={()=>dispatch(add(cart.id))}
                >+</button>
            </td>
            <td>
                <span>
                    {cart.price*cart.qty}
                    $
                    </span>
            </td>
        </tr>
    )
}