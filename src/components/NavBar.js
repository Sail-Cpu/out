import React from "react";
/* Icon */
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <div className="nav-bar-top">
                <div className="nav-bar-top-search-container">
                    <input type="text" placeholder="Location"></input>
                </div>
                <button>
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar;