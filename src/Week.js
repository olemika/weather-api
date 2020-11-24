import React, { useState, useEffect } from "react";


const Week = () => {

    const [weather, setWeather] = useState('')

    const key = 'bc8ec85a05e14a85876183250202411'
    const baseUrl = 'http://api.weatherapi.com/v1'

    useEffect(() => {
        fetch(`${baseUrl}/forecast.json?key=${key}&q=Moscow&days=7`)
            .then(data => data.json())
            .then(data => setWeather(data.forecast.forecastday))
    }, [])

    return (
        <div className="forecast">
            <h1>Погода на неделю</h1>
            <div className='week'>
                {weather.length > 0 && weather.map(d => <div className='item'> <img src={d.day.condition.icon} />  <p>Температура: {d.day.avgtemp_c}</p><p> Влажность: {d.day.avghumidity}</p></div>)}
            </div>
        </div>
    )

}

export default Week;