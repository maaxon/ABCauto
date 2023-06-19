
export interface ICar{
    id:number
    price:number
    description:string
    img: string
    brand:string
    model:string
    gallery:string[]
    spec:ISpec[]
}

interface ISpec{
    title:string,
    description:string
}