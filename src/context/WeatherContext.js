import React, { useState, createContext, useEffect } from "react";
import { Api } from "../api/Api";

export const weatherContext = createContext();

export const WeatherContextProvider = (props) =>{

    const[city, setCity] = useState("paris");
    const[weatherData, setWeatherData] = useState([]) 

    useEffect(() => {
        fetchCity(city);
    }, [])

    const fetchCity = async (cityName) => {
        setCity(await Api.fetchCityByName(cityName));
    }

    useEffect(() => {
        const fetchWeather = async (cityName) => {
            if(city){
                setWeatherData(await Api.fetchWeatherByCity(city.lat, city.lon));
            }
        }
        fetchWeather();
    }, [city])

    console.log(weatherData)
    

    return(
        <weatherContext.Provider value={{fetchCity, city, weatherData}}>
            {props.children}
        </weatherContext.Provider>
    )
}