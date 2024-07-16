 import './style.css';
import {getApi} from './fetch'
import marker from './images/vector (4).svg'

const icon = document.getElementById("marker")
icon.src = marker

const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    getApi();
})
getApi()
/* 
what data is needed:
location name
weather short description
temp

date

1st card --
feels like
humidity

2nd card --
wind speed
wind gusts

3rd card --
cloud cover
pressure
precipitaion

sidebar card
7day forecast ---
dayname
weather icon
temp


## Hourly weather ##
time
weather icon
degrees
rain chance

## 7day weather ##
today as title - then next 6

*/