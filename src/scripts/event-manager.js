// Purpose: This file handles event listeners.

// TODO: delete fake function after everyone creates their own function 
const myfunction = () => {
    console.log("pie")
}

const attachSearchEvent = () => {
    const concertSearchButton = document.querySelector("#concertsSearchButton")
    concertSearchButton.addEventListener("click", myfunction)

    const parksSearchButton = document.querySelector("#parksSearchButton")
    parksSearchButton.addEventListener("click", myfunction)

    const restaurantsSearchButton = document.querySelector("#restaurantsSearchButton")
    restaurantsSearchButton.addEventListener("click", myfunction)

    const meetupsSearchButton = document.querySelector("#meetupsSearchButton")
    meetupsSearchButton.addEventListener("click", myfunction)

    


}