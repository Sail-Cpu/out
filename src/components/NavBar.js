import React, { useContext, useState } from "react";
import { weatherContext } from "../context/WeatherContext";
/* Icon */
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const[cityName, setCityName] = useState();

    const{ fetchCity } = useContext(weatherContext);

    function submit(e){
        e.preventDefault();
        fetchCity(cityName);
    }

    return(
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
            </div>
            <div className="toggle-nav-bar-container">
                <div className="toogle-nav-bar-open">
                    <MenuIcon />
                </div>
            </div>
        
        </>
        
    )
}

export default NavBar;