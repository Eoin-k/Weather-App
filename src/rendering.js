import { getApi } from "./fetch";
import {format} from "date-fns"
import temp from './images/temp-icon.svg'
import wind from './images/wind.svg'
import gust from './images/gust.svg'
import humidity from './images/humidity.svg'
import rain from './images/rain.svg'
const locationName = document.getElementById("locationName")
const bigIcon = document.getElementById("main-icon-large")
const firstCard = document.getElementById("first-card")
const secondCard = document.getElementById("second-card")
const thirdCard = document.getElementById("third-card")
const hourlyCard = document.getElementById("hourly-card")
const sidebarCard = document.getElementById("sidebar-card")
const mainInfo = document.getElementById("main-info")
const tempBtn = document.getElementById("tempBtn")
const unitBtn = document.getElementById("unitBtn")





export const renderMainCards = (data) => {
    
    const {
        current,forecast,location
    } = data
// toggle Far / Cel & KM / MI
    let today = forecast.forecastday[0].date
    let degreevalue =  tempBtn.checked ? current.heatindex_f + `&#8457` : current.heatindex_c + `&#8451`;
    let feelsLiketemp = tempBtn.checked ? current.feelslike_f + `&#8457` : current.feelslike_c + `&#8451`;
    let niceDate = format(today, 'eeee | io MMMM yyyy ')
    let windspeedUnit = unitBtn.checked ? current.wind_mph + " Mp/h" : current.wind_kph + " Km/h"
    let gustSpeedUnit = unitBtn.checked ? current.gust_mph + " Mp/h" : current.gust_kph + " Km/h"
    let rainMeasure = unitBtn.checked ? current.precip_in + " in" : current.precip_mm+" mm"
    let pressureMeasure = unitBtn.checked ? current.pressure_in + " in" : current.pressure_mb+" mb"

// render info wrapper - top left 
    locationName.textContent = location.name
    mainInfo.innerHTML = `
    <p class="condition-text">${current.condition.text}</p>
    <span id="tempNumber" class="temp-number">${degreevalue}</span>
    <p class="day-and-time">${niceDate}</p>
    <p class="region">${location.region}</p>
    `
    firstCard.innerHTML = `
    <p class="heading-text">Feels like</p>
    <div>
    <img class="card-icon" src="${temp}">
    <span class="number-medium">${feelsLiketemp}</span>
    </div>
    <p class="heading-text">Humidity</p>
    <div>
    <img class="card-icon" src="${humidity}">
    <span class="number-medium">${current.humidity} &#37</span>
    </div>
    `

    secondCard.innerHTML = `
    <p class="heading-text">Current windspeed</p>
    <div>
    <img class="card-icon" src="${wind}">
    <span class="number-medium">${windspeedUnit}</span>
    </div>
    <p class="heading-text">Potential Gusts</p>
    <div>
    <img class="card-icon" src="${gust}">
    <span class="number-medium">${gustSpeedUnit}</span>
    </div>
    `
    thirdCard.innerHTML = `
    <p class="heading-text">Cloud cover</p>
    <div>
    <img class="card-icon" src="${wind}">
    <span class="number-medium">${current.cloud}%</span>
    </div>
    <p class="heading-text">Pressure</p>
    <div>
    <img class="card-icon" src="${gust}">
    <span class="number-medium">${pressureMeasure}</span>
    </div>
    <p class="heading-text">Precipitation</p>
    <div>
    <img class="card-icon" src="${rain}">
    <span class="number-medium">${rainMeasure}</span>
    </div>
    `
 }

 export const renderHourlyCard = (data) => {
    const {forecast} = data
    // forecast.forecastday[0].hour
    let hourValues = forecast.forecastday[0].hour
    console.log(hourValues)
 }


 tempBtn.addEventListener("click", (e) => {
    getApi()
})
console.log(tempBtn.value)