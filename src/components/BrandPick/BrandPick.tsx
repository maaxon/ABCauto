import classes from "./BrandPick.module.scss";
import React, {useEffect} from "react";
import InputRange from "react-input-range";
import './input-range.scss'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBrands} from "../../store/reducers/ActionCreators";
import {CarsSlice} from "../../store/reducers/CarsSlice/CarsSlice";
import {priceRange} from "../../models/IPriceRange";

const BrandPick = ({currentPage = ''}) => {

    const dispatch = useAppDispatch()

    const {setPrice,setBodyType,setGearboxType,setFilteredCars} = CarsSlice.actions

    const {price,bodyType,gearboxType} = useAppSelector(state => state.CarsReducer)



    useEffect(() => {
        dispatch(fetchBrands());
    }, [])

    const brands = useAppSelector(state => state.BrandReducer.brands)

    const onGearBoxChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGearboxType(e.target.value))
    }

    const onBodyChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setBodyType(e.target.value))
    }

    const onPricerChange = (value:priceRange) => {
        dispatch(setPrice(value))
    }

    return (
        <section className={classes.wrapper}>
            <div className={classes.brands}>
                {brands && brands.map((brand, index) =>
                    <Link to={`/cars/${brand}`} key={brand + index} className={classes.link}>
                        <p className={currentPage === brand ? classes.active : ''}>
                            {brand}
                        </p>
                    </Link>)}
            </div>
            <div className={classes.input}>
                <div className={classes.range}>
                    <h5>Быстрый подбор авто</h5>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        formatLabel={(value:number) => `${value} т.$`}
                        value={price}
                        onChange={onPricerChange}
                    />
                </div>
                <div className={classes.selects}>
                    <select name="select" onChange={onGearBoxChange} value={gearboxType}>
                        <option value="">Коробка</option>
                        <option value="Механическая">Механическая</option>
                        <option value="Автоматическая">Автоматическая</option>
                    </select>
                    <select name="select" value={bodyType} onChange={onBodyChange}>
                        <option value="">Тип кузова</option>
                        <option value="седан">седан</option>
                        <option value="универсал">универсал</option>
                        <option value="кроссовер">кроссовер</option>
                        <option value="купе">купе</option>
                    </select>
                </div>

                    <button onClick={()=>dispatch(setFilteredCars())}>
                        <span>показать</span>
                    </button>

            </div>


        </section>

    )
}

export default BrandPick;