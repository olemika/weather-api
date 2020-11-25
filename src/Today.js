import React, { useState, useEffect } from "react";


const Today = () => {
    const [weather, setWeather] = useState('')

    const baseUrl = 'https://api.openweathermap.org/data/2.5'


    useEffect(() => {

        fetch(`${baseUrl}/onecall?lat=55.753960&lon=37.620393&exclude=minutely,hourly&units=metric&appid=46ff5a3df8a8bb470a1eba7f5d0ceed7`)
            .then(data => data.json())
            .then(data => setWeather({
                currentTemp: Math.floor(data.current.temp),
                currentFeelsLike: Math.floor(data.current.feels_like),
                icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
                humidity: data.current.humidity,

                tempDay: Math.floor(data.daily[0].temp.day),
                feelslikeDay: Math.floor(data.daily[0].feels_like.day),

                tempNight: Math.floor(data.daily[0].temp.night),
                feelslikeNight: Math.floor(data.daily[0].feels_like.night),

                tempEve: Math.floor(data.daily[0].temp.eve),
                feelslikeEve: Math.floor(data.daily[0].feels_like.eve),

                tempMorn: Math.floor(data.daily[0].temp.morn),
                feelslikeMorn: Math.floor(data.daily[0].feels_like.morn),


            }
            ))


    }, [])

    return (
        <div className="forecast">
            <h2>Погода в Москве сегодня</h2>
            <div className="todayList">
                <div className="item todayMain">
                    <img src={weather.icon} alt="weather_icon"/>
                    <h3>Сейчас</h3>
                    <p>Температура: {weather.tempMorn} ℃ </p>
                    <p>Ощущается как: {weather.feelslikeMorn} ℃ </p>
                    <p>Влажность: {weather.humidity} % </p>
                </div>
                <div className="item mini">
                    <h3>Сегодня утром</h3>
                    <p>Температура: {weather.tempMorn} ℃ </p>
                    <p>Ощущается как: {weather.feelslikeMorn} ℃ </p>
                    <p>Влажность: {weather.humidity} % </p>
                </div>
                <div className="item mini">
                    <h3>Сегодня днем</h3>
                    <p>Температура: {weather.tempDay} ℃ </p>
                    <p>Ощущается как: {weather.feelslikeDay} ℃ </p>
                    <p>Влажность: {weather.humidity} % </p>
                </div>
                <div className="item mini">
                    <h3>Сегодня вечером</h3>
                    <p>Температура: {weather.tempEve} ℃ </p>
                    <p>Ощущается как: {weather.feelslikeEve} ℃ </p>
                    <p>Влажность: {weather.humidity} % </p>
                </div>
                <div className="item mini">
                    <h3>Сегодня ночью</h3>
                    <p>Температура: {weather.tempNight} ℃ </p>
                    <p>Ощущается как: {weather.feelslikeNight} ℃ </p>
                    <p>Влажность: {weather.humidity} % </p>
                </div>
            </div>
        </div>
    )
}

export default Today;
