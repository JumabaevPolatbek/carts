import { useDispatch, useSelector } from "react-redux"
import { carts } from "../data";
import {add} from '../store/actionsFunc'

export default function Products(){
    const state = useSelector(state=>state);
    const dispatch=useDispatch();

    return (
        <div className="products">
            <div className="g63">
                <img src={`${carts[0].img}`} alt={`${carts[0].name}`} />
                <span>{carts[0].name}</span>
                <button 
                onClick={()=>dispatch(add(1))}
                className="add-cart"
                >Add Cart</button>
            </div>
            <div className="shin">
                <img src={`${carts[1].img}`} alt={`${carts[1].name}`} />
                <span>{carts[1].name}</span>
                <button 
                onClick={()=>dispatch(add(2))
                }
                className="add-cart">Add Cart</button>
            </div>
        </div>
    )
}