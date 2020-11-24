import React, { useState, useEffect } from "react";

import { getCurrentWeather } from './servicies/weaterApi'

const Today = () => {
    const [weather, setWeather] = useState('')

    const key = '46ff5a3df8a8bb470a1eba7f5d0ceed7'
    const baseUrl = 'https://api.openweathermap.org/data/2.5'

    
    
    useEffect(() => {

        fetch(`${baseUrl}/weather?id=524901&units=metric&appid=${key}`)
            .then(data => data.json())
            .then(data =>    setWeather({
                temp: Math.floor(data.main.temp),
                feelslike: Math.floor(data.main.feels_like),
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ,
                humidity: data.main.humidity,
           }
    ))

       
    }, [])

    return (
        <div className="forecast">
        <h2>Сегодняшняя погода</h2>
            <div className="item">
                <img src={weather.icon} />
                <p>Сегодня</p>
                <p>Температура: {weather.temp} ℃ </p>
                <p>Ощущается как: {weather.feelslike} ℃ </p>
                <p>Влажность: {weather.humidity} % </p>
            </div>
        </div>
    )
}

export default Today;
