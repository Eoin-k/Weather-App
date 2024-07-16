import { renderMainCards,renderHourlyCard } from "./rendering"

const locationInput = document.getElementById("location")

  export async function getApi () {
    let key = "3069d8c5981541cea19112054241607"
    let location = locationInput.value ? locationInput.value : 'dublin'
    try {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=no&alerts=no`)
        let data = await res.json()
        renderMainCards(data)
        renderHourlyCard(data)
    } catch(error) {
        alert(`We couldnt find ${location}, please try again`)
        locationInput.value = ""
        console.log(error)
        return
    }
}



