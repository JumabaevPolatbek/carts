export type Cart={
    id:number,
    name:string,
    img:string,
    price:number,
    qty:number
}

export enum Actions{
    INCREASE="INCREASE",
    DECREASE="DECREASE",
    REMOVE_CART="REMOVE_CART"
}

type Increase={
    type:Actions.INCREASE,
    payload:number
}
type Decrease={
    type:Actions.DECREASE,
    payload:number
}
type Remove={
    type:Actions.REMOVE_CART,
    payload:number
}

export type ActionFunc=Increase|Decrease|Remove;