import { Actions, Cart } from "../types"

export const add=(id:number)=>{
    return {
        type: Actions.INCREASE,
        payload:id
    }
}
export const decrease=(id:number)=>{
    return {
        type: Actions.DECREASE,
        payload:id
    }
}
export const remove = (id:number)=>{
    return {
        type:Actions.REMOVE_CART,
        payload:id
    }
}
export const getQty=(itemCarts:Cart[])=>{
    return itemCarts.reduce((prevQty,curItem)=>prevQty+curItem.qty,0)
}

export const getSum=(itemCarts:Cart[])=>{
    return itemCarts.reduce((prevSum,curItem)=>prevSum+(curItem.qty*curItem.price),0);
}