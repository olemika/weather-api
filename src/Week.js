import React, { useState, useEffect } from "react";


const Week = () => {

    const [weather, setWeather] = useState('')

    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=55.753960&lon=37.620393&exclude=minutely,hourly&units=metric&appid=46ff5a3df8a8bb470a1eba7f5d0ceed7`)
            .then(data => data.json())
            .then(data => setWeather(data.daily))
    }, [])

    const getTime = (unixTime) => {
        const d = new Date(unixTime*1000)
        return d.toLocaleDateString()
    }   

    return (
    

        <div className="forecast">
            <h2>Погода в Москве на неделю</h2>
            <div className='week'>
                {weather.length > 0 && weather.map(d => <div className='item'> 
                <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} />  
                <h3>Дата: {getTime(d.dt)}</h3>
                <p>Температура: {Math.floor(d.temp.day)} ℃ </p>
                <p> Ощущается как: {Math.floor(d.feels_like.day)} ℃ </p>
                <p> Влажность: {d.humidity} % </p>
                </div>)}
            </div>
        </div>
    )

}

export default Week;