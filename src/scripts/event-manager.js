// Purpose: This file handles event listeners.

const attachSearchEvent = () => {
    const concertSearchButton = document.querySelector("#concertsSearchButton")
    concertSearchButton.addEventListener("click", myfunction)

    const parksSearchButton = document.querySelector("#parksSearchButton")
    parksSearchButton.addEventListener("click", myfunction)

    const restaurantsSearchButton = document.querySelector("#restaurantsSearchButton")
    restaurantSearchButton.addEventListener("click", myfunction)

    const meetupsSearchButton = document.querySelector("#meetupsSearchButton")
    meetupsSearchButton.addEventListener("click", myfunction)

    


}