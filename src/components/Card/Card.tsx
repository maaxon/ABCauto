import classes from "./card.module.scss";
import {Link} from "react-router-dom";

interface CardProps{
    brand:string
    model:string
    id:number
    img:string
    desc:string
    price:number
}

export default function Card({brand, model, id, img, desc, price}:CardProps) {
    return (
        <Link to={`/car/${id}`}>
            <div className={classes.card}>
                <img src={img} alt='card-img'/>
                <h4>{brand} {model}</h4>
                <p className={classes.price}>{price}$ <span>доставка от 2000$</span></p>
                <p>{desc}</p>
            </div>
        </Link>
    )
}