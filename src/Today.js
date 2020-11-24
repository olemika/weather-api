import React, { useState, useEffect } from "react";

import { getCurrentWeather } from './servicies/weaterApi'

const Today = () => {
    const [weather, setWeather] = useState('')

    const key = 'bc8ec85a05e14a85876183250202411'
    const baseUrl = 'http://api.weatherapi.com/v1'
    
    useEffect(() => {

        fetch(`${baseUrl}/current.json?key=${key}&q=Moscow`)
            .then(data => data.json())
            .then(data => setWeather({
                temp: data.current.temp_c,
                icon: data.current.condition.icon,
                humidity: data.current.humidity,
            }
    ))

       
    }, [])
    
    return (
        <div className="forecast">
            <h1>Сегодняшняя погода</h1>
            <img src={weather.icon} />
            <p>Температура: {weather.temp}</p>
            <p>Влажность: {weather.humidity}</p>

        </div>
    )
}

export default Today;


// cloudcover: 50
// feelslike: -2
// humidity: 93
// is_day: "no"
// observation_time: "06:11 PM"
// precip: 0.5
// pressure: 1008
// temperature: 1
// uv_index: 1
// visibility: 10
// weather_code: 296
// weather_descriptions: Array(1)
// 0: "Light Rain"
// length: 1
// __proto__: Array(0)
// weather_icons: Array(1)
// 0: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0033_cloudy_with_light_rain_night.png"
// length: 1
// __proto__: Array(0)
// wind_degree: 280
// wind_dir: "W"
// wind_speed: 11