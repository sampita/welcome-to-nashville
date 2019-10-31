//Purpose: This file manages the form section on the DOM
import results from "./searchresults-manager.js"
import data from "./api-manager.js"

const form = {
// This function builds the search form and prints it to the DOM
buildSearchForm() {
    const searchForm = `
    <h3 class="search-header">
        Search for Things to Do in Nashville
    </h3>
    <div class="search-field">
        <select id ="parks-dropdown-box" size="1">
            <option value="parks by feature" disabled selected hidden>parks by feature</option>
            <option value="dog_park">Dog Park</option>
            <option value="hiking_trails">Hiking Trails</option>
            <option value="playground">Playground</option>
            <option value="basketball_courts">Basketball Courts</option>
            <option value="swimming_pool">Swimming Pool</option>
        </select>
        <button id="parksSearchButton">Search</button>
    </div>
    <div class="search-field">
        <input id="restaurants-input" type="text" placeholder="restaurants by food type">
        <button id="restaurantsSearchButton">Search</button>
    </div>
    <div class="search-field">
        <input id="meetups-input" type="text" placeholder="meetups by topic">
        <button id="meetupsSearchButton">Search</button>
    </div>
    <div class="search-field">
        <input id="concerts-input" type="text" placeholder="concerts by genre">
        <button id="concertsSearchButton">Search</button>
    </div>
    `
    // Gets reference to Search container in the index.html file and prints the above HTML code to the DOM.
    const searchContainer = document.querySelector(".searchContainer")
    searchContainer.innerHTML = searchForm

},


// clear the resultsContainer's previous search results
clearResults() {
    let resultsContainer = document.querySelector(".list-group")
    resultsContainer.innerHTML = ""
},

// grab event search data and query the API
searchFormEventbrite() {
    let searchString = document.querySelector("#meetups-input").value;

    form.clearResults() 
    // prevent empty string search 
    if (searchString) {
        data.getEventbriteData(searchString)
        .then(({events}) => {
            events.forEach(event => {
                // save 'name' and 'address' to variables for result card creation
                // console.log("event", event)
                const name = event.description.text
                // console.log("description", name)
                let address = `${event.venue.name}`
                if (address === "null"){
                    address = "Address unavailable"
                }
                // console.log('name:', name)
                // console.log('address:', address)
                // create new search result card
                const eventEl = results.createCardContainer(name, address, "meetup")
                // console.log("eventEl", eventEl)
                results.renderCardToDom(eventEl)
            }
            ) 
        }
        )
}

let searchInputField = document.querySelector("#meetups-input")
searchInputField.value = ""
},

searchFormParks() {
    let dropDownList = document.querySelector("#parks-dropdown-box");
    let searchString = dropDownList[dropDownList.selectedIndex].value
    form.clearResults() 
    if (searchString) {
        data.getParksData(searchString)
        .then(( parks ) => {
                // console.log(parks)
                let fiveParks = parks.slice(0,6)
                fiveParks.forEach(park => {
                    let parkAddress = park.mapped_location.human_address.split("\"")[3]
                    console.log(parkAddress)
                    let parkName = park.park_name
                    console.log(park.park_name, park.mapped_location.human_address)
                    let parkEl = results.createCardContainer(parkName, parkAddress, "park")
                    console.log("hi", parkEl)
                    results.renderCardToDom(parkEl)
                })
            })
    }
    dropDownList.value = dropDownList[0].value
},


// Accesses restaurants input and queries Zomato API
searchFormZomato() {
    const searchString = document.querySelector("#restaurants-input").value;
    form.clearResults()
    if (searchString) {
        data.getZomatoData(searchString)
        //for now this console logs restaurant element
            .then(( food ) => {
                // console.log(food.restaurants)
                food.restaurants.forEach(restaurant => {
                    const restaurantName = restaurant.restaurant.name
                    const restaurantAddress = restaurant.restaurant.location.address
                    const restaurantElement = results.createCardContainer(restaurantName, restaurantAddress, "restaurant")
                    results.renderCardToDom(restaurantElement)
                })
            })
    }
    let searchInputField = document.querySelector("#restaurants-input")

    searchInputField.value = ""    
},

//grabs the search input and queries the Ticketmaster API
searchFormTicketmaster() {
    const searchString = document.querySelector("#concerts-input").value

    //clears previous results before appending new results to DOM
    form.clearResults()

    if (searchString) {
        data.getTicketmasterData(searchString)
            .then(concerts => {
                //returns name and address of each concert
                concerts._embedded.events.forEach(concert => {
                    concerts.name = concert.name
                    concerts.address = concert._embedded.venues[0].address.line1
                    console.log(concerts.name, concerts.address)
                    //create new search result card
                    const concertEl = results.createCardContainer(concerts.name, concerts.address, "concert")

                    results.renderCardToDom(concertEl)
                })
            }
            )
    }
    let searchInputField = document.querySelector("#concerts-input")

    searchInputField.value = ""

  }  
}

export default form
