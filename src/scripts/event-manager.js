// Purpose: This file handles event listeners.

// TODO: delete fake function after everyone creates their own function 
const myfunction = () => {
    console.log("pie")
}

const attachSearchEvent = () => {
    const concertsSearchButton = document.querySelector("#concertsSearchButton")
    console.log(concertsSearchButton)
    concertsSearchButton.addEventListener("click", searchFormTicketmaster)

    const parksSearchButton = document.querySelector("#parksSearchButton")
    parksSearchButton.addEventListener("click", searchFormParks)

    const restaurantsSearchButton = document.querySelector("#restaurantsSearchButton")
    restaurantsSearchButton.addEventListener("click", searchFormZomato)

    const meetupsSearchButton = document.querySelector("#meetupsSearchButton")
    meetupsSearchButton.addEventListener("click", searchFormEventbrite)


    const restaurantEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#restaurantsSearchButton").click();
        }
    }
    // Selects restaurant input
    enterKeyHandler = document.getElementById("restaurants-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandler.addEventListener("keyup", restaurantEventFunction);


    const concertsEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#concertsSearchButton").click();
        }
    }
    // Selects restaurant input
    enterKeyHandler = document.getElementById("concerts-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandler.addEventListener("keyup", concertsEventFunction);


    const meetupsEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#meetupsSearchButton").click();
        }
    }
    // Selects restaurant input
    enterKeyHandler = document.getElementById("meetups-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandler.addEventListener("keyup", meetupsEventFunction);


    const parksEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#parksSearchButton").click();
        }
    }
    // Selects restaurant input
    enterKeyHandler = document.getElementById("parks-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandler.addEventListener("keyup", parksEventFunction);

}

