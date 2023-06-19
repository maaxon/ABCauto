import Card from "../../components/Card/Card";
import classes from './Cars.module.scss'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {CarsSlice} from "../../store/reducers/CarsSlice/CarsSlice";
import BrandPick from "../../components/BrandPick/BrandPick";
import {fetchCars} from "../../store/reducers/ActionCreators";

const Cars = () => {

    const dispatch = useAppDispatch()
    useEffect(()=>{dispatch(fetchCars())},[])

    const {brand}  = useParams()

    const {filteredCars} = useAppSelector(state => state.CarsReducer)
    const {setBrand,setFilteredCars} = CarsSlice.actions

    useEffect(() => {
        if (brand) dispatch(setBrand(brand))
        else dispatch(setBrand(''))
        dispatch(setFilteredCars())
    }, [brand])

    const [count, setCount] = useState(6)

    console.log(brand)

    return (<section className={classes.wrap}>
            <h1>Каталог авто</h1>

            <BrandPick/>

            {filteredCars.length > 0 ? <section className={classes.cars}>
                {filteredCars.slice(0, count).map(car => <Card key={car.id} price={car.price} id={car.id}
                                                       desc={car.description} img={car.img}
                                                       brand={car.brand} model={car.model}/>)}
            </section> : <h2 className={classes.outStock}>Таких автомобилей нет в продаже</h2>}
            {filteredCars.length > count && <button onClick={() => setCount(filteredCars.length)}>
                показать ещё
            </button>}
        </section>)
}

export default Cars