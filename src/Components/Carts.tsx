import { useDispatch, useSelector } from "react-redux"
import { Cart } from "../types"
import { decrease,add,remove,getSum} from "../store/actionsFunc";
import Tbody from "./Tbody";
import CartSum from "./CartSum";


export default function Carts(){

    const itemCarts=useSelector<Cart[],Cart[]>(state=>state);

    const dispatch=useDispatch()

   

    return (
            <>
                <div className="carts">
                    <table>
                        <tbody>
                        <tr>
                            <th></th>
                            <th>Название</th>
                            <th>Фото</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Общая цена</th>
                        </tr>
                        {itemCarts.map((cart,index)=>{
                            return <Tbody cart={cart} key={index}/>
                        })}
                        </tbody>
                    </table>
                    {itemCarts.length>0 &&
                        <CartSum/>
                    }
                </div>
            </>
    )
}