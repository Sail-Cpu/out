import React, { useEffect, useState, useContext } from "react";
import { weatherContext } from "../context/WeatherContext";
/* Img */
import Jacket from '../assets/img/jacket.png';
import Sweat from '../assets/img/sweat.png';
import TShirt from '../assets/img/t-shirt.png';
import Pants from '../assets/img/pants.png';
import Accessory from '../assets/img/accessory.png';

const Clothes = () => {

    const{ getToken, weather } = useContext(weatherContext);

    const[clothes, setClothes] = useState([]);
    const[clothesList, setClothesList] = useState([]);

    useEffect(() => {
        setWeatherClothes(getToken().main?.temp);
    }, [weather])

    function setWeatherClothes(temp){
        let cl = [["veste"],["pull"],["tshirt"],["pantalon"],["accessoire"]];
        let c = [];
        if(temp >= 25){
            cl[2].push("t-shirt manche courte", "polo", "chemise manche courte");
            cl[3].push("jean", "short", "lin");
            cl[4].push("lunette");
        }else if(temp < 25 && temp >= 20){
            cl[0].push("jean", "blazer"); 
            cl[2].push("t-shirt manche courte", "t-shirt manche longue", "polo", "chemise manche longue");
            cl[3].push("jean", "survetement");
        }else if(temp < 20 && temp >= 10){
            cl[0].push("jean", "blazer", "cuir", "harrington", "dain", "bomber");
            cl[1].push("pull classique", "sweat", "col roulé");
            cl[2].push("t-shirt manche courte", "t-shirt manche longue", "polo", "chemise manche longue");
            cl[3].push("jean", "survetement");
        }else if(temp < 10){
            cl[0].push("blazer", "cuir", "harrington", "dain", "bomber", "doudoune", "parka", "polaire");
            cl[1].push("pull classique", "sweat", "col roulé");
            cl[2].push("t-shirt manche courte", "t-shirt manche longue", "polo", "chemise manche longue");
            cl[3].push("jean", "survetement");
            cl[4].push("bonnet", "echarpe");
        }
        for(let i = 0; i < cl.length ; i++){
            if(cl[i].length > 1){ 
                c.push(cl[i])
            }
        }
        setClothes(c);
    }

    function displayClothesList(){
        return(
            <>
                <div className="clothe-list-title-container"><span style={{fontSize: '20px', fontWeight: 900}}>{clothesList[0]}</span></div>
                <div className="clothe-list-content">
                    {clothesList.map((item,idx) => {
                        if(idx > 0){
                            return(
                                <span>{item}</span>
                            )
                        }  
                    })}
                </div>
            </>
            )
    }

    function displayWeatherItem(item) {
        if(item[0] == "veste"){
            return <img src={Jacket} onClick={() => setClothesList(item)}/>
        }else if(item[0] == "pull"){
            return <img src={Sweat} onClick={() => setClothesList(item)}/> 
        }else if(item[0] == "tshirt"){
            return <img src={TShirt} onClick={() => setClothesList(item)}/>
        }else if(item[0] == "pantalon"){
            return <img src={Pants} onClick={() => setClothesList(item)}/>
        }else{
            return <img src={Accessory} onClick={() => setClothesList(item)}/>
        }
    }

    return(
        <>
            {clothes &&
                <div className="clothes">
                    <div className="clothe">
                        {clothes.map(item => {
                            return(
                                <>
                                    {displayWeatherItem(item)}
                                </>
                            )
                        })}
                        <div className="list-clothes-container">
                            {clothes && 
                                displayClothesList()
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Clothes;