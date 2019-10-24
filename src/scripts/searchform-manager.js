



// This function builds the search form and prints it to the DOM
const buildSearchForm = () => {
    const searchForm = `
    <h3 class="search-header">
        Search for Things to Do in Nashville
    </h3>

    <input id="parks-input" type="text" placeholder="parks by feature">
    <button id="parksSearchButton">Search</button>
    
    <input id="restaurants-input" type="text" placeholder="restaurants by food type">
    <button id="restaurantsSearchButton">Search</button>
    
    <input id="meetups-input" type="text" placeholder="meetups by topic">
    <button id="meetupsSearchButton">Search</button>
    
    <input id="concerts-input" type="text" placeholder="concerts by genre">
    <button id="concertsSearchButton">Search</button>
    `
    // Gets reference to Search container in the index.html file and prints the above HTML code to the DOM.
    const searchContainer = document.querySelector(".searchContainer")
    searchContainer.innerHTML = searchForm

}


// clear the resultsContainer's previous search results
const clearResults = () => {
    let resultsContainer = document.querySelector(".list-group")
    resultsContainer.innerHTML = ""
}

// grab event search data and query the API
const searchFormEventbrite = () => {
    let searchString = document.querySelector("#meetups-input").value;

    clearResults()
    // remove line below when done testing
    // console.log(`Eventually will search for "${searchString}"`);

    // prevent empty string search 
    if (searchString) {
        getEventbriteData(searchString)
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
                console.log('name:', name)
                console.log('address:', address)
                // create new search result card
                const eventEl = createCardContainer(name, address, "meetup")
                // console.log("eventEl", eventEl)
                renderCardToDom(eventEl)
            }
            )
        }
        )
}

let searchInputField = document.querySelector("#meetups-input")

searchInputField.value = ""
}

const searchFormParks = () => {
    let searchString = document.querySelector("#parks-input").value;
    clearResults()
    if (searchString) {
        getParksData(searchString)
            .then(( parks ) => {
                // console.log(parks)
                parks.forEach(park => {
                    let parkAddress = park.mapped_location.human_address.split("\"")[3]
                    console.log(parkAddress)
                    let parkName = park.park_name
                    console.log(park.park_name, park.mapped_location.human_address)
                    let parkEl = createCardContainer(parkName, parkAddress, "park")
                    console.log("hi", parkEl)
                    renderCardToDom(parkEl)
                })
            })
    }
    let searchInputField = document.querySelector("#parks-input")

    searchInputField.value = ""
}

// Accesses restaurants input and queries Zomato API
const searchFormZomato = () => {
    const searchString = document.querySelector("#restaurants-input").value;
    clearResults()
    if (searchString) {
        getZomatoData(searchString)
        //for now this console logs restaurant element
            .then(( food ) => {
                // console.log(food.restaurants)
                food.restaurants.forEach(restaurant => {
                    const restaurantName = restaurant.restaurant.name
                    const restaurantAddress = restaurant.restaurant.location.address
                    const restaurantElement = createCardContainer(restaurantName, restaurantAddress, "restaurant")
                    renderCardToDom(restaurantElement)
                })
            })
    }
    let searchInputField = document.querySelector("#restaurants-input")

    searchInputField.value = ""    
}

//grabs the search input and queries the Ticketmaster API
const searchFormTicketmaster = () => {
    const searchString = document.querySelector("#concerts-input").value

    //clears previous results before appending new results to DOM
    clearResults()

    if (searchString) {
        getTicketmasterData(searchString)
            .then(concerts => {
                //returns name and address of each concert
                concerts._embedded.events.forEach(concert => {
                    concerts.name = concert.name
                    concerts.address = concert._embedded.venues[0].address.line1
                    console.log(concerts.name, concerts.address)
                    //create new search result card
                    const concertEl = createCardContainer(concerts.name, concerts.address, "concert")

                    renderCardToDom(concertEl)
                })
            }
            )
    }
    let searchInputField = document.querySelector("#concerts-input")

    searchInputField.value = ""

}  

