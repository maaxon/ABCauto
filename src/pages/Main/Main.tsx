import banner from '../../misc/banner.png'
import about from '../../misc/about.png'
import classes from "./Main.module.scss";
import BrandPick from "../../components/BrandPick/BrandPick";
import {useEffect} from "react";
import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";
import slide from "../../misc/mark1.png"
import slide2 from "../../misc/mark2.png"
import slide3 from "../../misc/mark3.png"
import bank from "../../misc/bank1.png"
import bank2 from "../../misc/bank2.png"
import bank3 from "../../misc/bank3.png"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ICar} from "../../models/ICars";
import {fetchCars} from "../../store/reducers/ActionCreators";




const Main = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{dispatch(fetchCars())},[])

    const {cars} = useAppSelector(state => state.CarsReducer)
    const {slideCount} = useAppSelector(state => state.AppReducer)

    return (
        <main className={classes.main}>
            <img src={banner} className={classes.banner} alt="banner"/>
            <BrandPick/>
            <h1>Автомобили в наличии</h1>
            <section className={classes.cars}>
                {cars.slice(0, 3).map((car:ICar) => <Card key={car.id} img={car.img} price={car.price}
                                                          desc={car.description} brand={car.brand} id={car.id}
                                                          model={car.model}/>)}
            </section>
            <section className={classes.marketing}>
                <h1>Спецпредложения</h1>
                <Slider arrowRightClass={classes.arrowRight} wrapClass={classes.sliderWrap}
                        arrowLeftClass={classes.arrowLeft} arrowClass={classes.arrow}
                        slides_count={slideCount}>
                    <img src={slide}  key={"sl-1"} alt='slide'/>
                    <img src={slide2} key={"sl-2"} alt='slide'/>
                    <img src={slide3} key={"sl-3"} alt='slide'/>
                    <img src={slide}  key={"sl-4"} alt='slide'/>
                    <img src={slide2} key={"sl-5"} alt='slide'/>
                </Slider>
                <h1>Банки-партнеры</h1>
                <section className={classes.banks}>
                    <img src={bank} alt="bank"/>
                    <img src={bank2} alt="bank"/>
                    <img src={bank3} alt="bank"/>
                </section>
            </section>
            <section className={classes.about}>
                <h1>О компании</h1>
                <p>Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200
                    автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера»
                    работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля</p>
                <img src={about} alt="about"/>
            </section>
        </main>
    )
}

export default Main