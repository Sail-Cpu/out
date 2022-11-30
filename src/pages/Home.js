import React, { useEffect, useState } from "react";
import { Api } from "../api/Api";
/*Component */
import NavBar from "../components/NavBar";

const Home = () => {

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCity(await Api.fetchCityByName("lille"));
        }
        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            if(city){
                setWeatherData(await Api.fetchWeatherByCity(city.lat, city.lon)); 
            }    
        }
        fetchData();
    }, [city])

    console.log(weatherData)

    return(
        <div className="home-container">
            <NavBar />
            <div className="home">  
                    <div className="home-top-container">
                        <span>Out.</span>
                    </div>
                    <div className="home-bottom-container">
                        <h1>08°</h1>
                        <div>
                            <h2>London</h2>
                            <span>06:43 - mercredi 30 novembre</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home;