
import { ActionFunc,Cart ,Actions} from "../types"
import { carts } from "../data";




export const reducer = (state:any[]|Cart[]=[],action:ActionFunc)=>{
    switch(action.type){
        case Actions.INCREASE:
           if(state.find(item=>item.id===action.payload)===undefined){
            return [...state,{
                id:carts[action.payload-1].id,
                name:carts[action.payload-1].name,
                price: carts[action.payload-1].price,
                img:carts[action.payload-1].img,
                qty:1
            }]
           } else {
               return state.map(item=>{
                if(item.id===action.payload){
                    return {...item,
                        id:item.id,
                        name:item.name,
                        price:item.price,
                        img:item.img,
                        qty:item.qty+1
                    }
                }
                else {return item}
               })
           }
        case Actions.DECREASE:
           if(state.find(item=>item.id===action.payload)?.qty===1){
            return state.filter(item=>item.id!==action.payload)
           }else {
            return state.map(item=>{
                if(item.id===action.payload){
                    return {...item,
                    qty:item.qty-1}
                } else {
                    return item
                }
            })
           }
        case Actions.REMOVE_CART:
            return state.filter(item=>item.id!==action.payload);
            default:
                return state
    }
}