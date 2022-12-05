import React, { useContext, useState, useEffect } from "react";
import { weatherContext } from "../context/WeatherContext";
/* Icon */
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    
    const{ fetchCity, weather, getToken } = useContext(weatherContext);

    const[cityName, setCityName] = useState();
    const[weatherData, setWeatherData] = useState();
    const[toogleModal, setToogleModal] = useState(false);

    useEffect(() => {
        setWeatherData(getToken());
    }, [weather])

    function submit(e){
        e.preventDefault();
        fetchCity(cityName);
    }

    return(
        <>
            {weatherData && 
            <>
                <div className="nav-bar-container">
                    <form onSubmit={(e) => submit(e)} className="nav-bar-top">
                        <div className="nav-bar-top-search-container">
                            <input value={cityName} type="text" placeholder="Location" onChange={(e) => setCityName(e.target.value)}></input>
                        </div>
                        <button type="submit">
                            <SearchIcon />
                        </button>
                    </form>
                    <div className="nav-bar-weather-data-container">
                        <div className="nav-bar-weather-data-top">
                            <h1>Weather Data</h1>
                        </div>
                        <div className="nav-bar-weather-data">
                            <span className="data-left">Nuageux</span>
                            <span className="data-right">{weatherData.clouds.all}%</span>
                        </div>
                        <div className="nav-bar-weather-data">
                            <span className="data-left">Humidité</span>
                            <span className="data-right">{weatherData.main.humidity}%</span>
                        </div>
                        <div className="nav-bar-weather-data">
                            <span className="data-left">Temperature min</span>
                            <span className="data-right">{weatherData.main.temp_min}°c</span>
                        </div>
                        <div className="nav-bar-weather-data">
                            <span className="data-left">Temperature max</span>
                            <span className="data-right">{weatherData.main.temp_max}°c</span>
                        </div>
                        <div className="nav-bar-weather-data">
                            <span className="data-left">Description</span>
                            <span className="data-right">{weatherData.weather[0].description}</span>
                        </div>
                    </div>
                </div>
                <div className="toggle-nav-bar-container">
                    <div className="toogle-nav-bar-open" onClick={() => setToogleModal(!toogleModal)}>
                        <MenuIcon />
                    </div>
                    <div className="modal-nav-bar" style={{display: toogleModal ? 'flex' : 'none'}}>
                        <form onSubmit={(e) => submit(e)} className="nav-bar-top">
                            <div className="nav-bar-top-search-container">
                                <input value={cityName} type="text" placeholder="Location" onChange={(e) => setCityName(e.target.value)}></input>
                            </div>
                            <button type="submit">
                                <SearchIcon />
                            </button>
                        </form>
                        <div className="modal-nav-weather-data-container">
                            <div className="modal-nav-weather-data-name">
                                <h1>{weatherData.name}</h1>
                            </div>
                            <div className="modal-nav-weather-data-deg">
                                <h2>{weatherData.main.temp}</h2>
                            </div>
                            <div className="modal-nav-weather-data-bottom">
                                <div className="modal-nav-weather-data-content">
                                    <span>Nuageux</span>
                                    <span>{weatherData.clouds.all}%</span>
                                </div>
                                <div className="modal-nav-weather-data-content">
                                    <span>Humidité</span>
                                    <span>{weatherData.main.humidity}%</span>
                                </div>
                                <div className="modal-nav-weather-data-content">
                                    <span>Temperature min</span>
                                    <span>{weatherData.main.temp_min}°c</span>
                                </div>
                                <div className="modal-nav-weather-data-content">
                                    <span>Temperature max</span>
                                    <span>{weatherData.main.temp_max}°c</span>
                                </div>
                                <div className="modal-nav-weather-data-content">
                                    <span>Description</span>
                                    <span>{weatherData.weather[0].description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
        
    )
}

export default NavBar;