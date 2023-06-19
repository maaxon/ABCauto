import React, {useEffect} from "react";
import Error from "../Error/Error";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCar} from "../../store/reducers/ActionCreators";
import CarView from "./CarView";
import {useParams} from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const Car = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()

    const {car,isLoading} = useAppSelector(state => state.CarsReducer)
    const {mode} = useAppSelector(state => state.AppReducer)

    useEffect(()=>{
        if (id != null) {
            dispatch(fetchCar(id))
        }},[])

        if (isLoading) return <Modal/>

        if (!car) {
            return <Error/>
        }

        return (
            <CarView car={car} mode={mode}/>
        )
}


export default Car





