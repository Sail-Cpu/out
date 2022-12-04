import React, { useState, createContext, useEffect } from "react";
import { Api } from "../api/Api";

export const weatherContext = createContext();

export const WeatherContextProvider = (props) =>{

    const[city, setCity] = useState();
    const[weather, setWeather] = useState();

    useEffect(() => {
        if(!getToken()){
            fetchCity("paris");
            console.log("ok")
        }
    } , [])

    useEffect(() => {
        if(city){
            fetchWeather(city);
            console.log("oky")
        }
    }, [city])

    const fetchCity = async (cityName) => {
        setCity(await Api.fetchCityByName(cityName));
    }

    const fetchWeather = async (city) => {
        const data = await Api.fetchWeatherByCity(city.lat, city.lon);
        setWeather(data);
        sessionStorage.setItem("weatherData", JSON.stringify(data));
    }

    function getToken() {
        const weather = sessionStorage.getItem('weatherData');
        const weatherToken = JSON.parse(weather);
        return weatherToken;
    }

    return(
        <weatherContext.Provider value={{ fetchCity, getToken, city, weather }}>
            {props.children}
        </weatherContext.Provider>
    )
}