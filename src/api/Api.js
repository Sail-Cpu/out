import axios from 'axios';

const Api_Key = process.env.REACT_APP_API_KEY;
const weatherApiLink = "https://api.openweathermap.org/data/2.5/weather?";
const geocodingLink = "http://api.openweathermap.org/geo/1.0/direct?";

export const Api = {
    fetchCityByName: async (cityName) => {
        const endpoint = `${geocodingLink}q=${cityName}&limit=1&appid=${Api_Key}`;
        return await (await axios(endpoint)).data[0];
    },
    fetchWeatherByCity: async (lat, lon) => {
        const endpoint = `${weatherApiLink}lat=${lat}&lon=${lon}&lang=fr&appid=${Api_Key}&units=metric`
        return await (await axios(endpoint)).data;
    }
}