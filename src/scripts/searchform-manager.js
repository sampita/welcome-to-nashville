// Purpose: This file populates the Search section of the index.html page.

//function for search button event listener


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

// grab event search data and query the API
const searchFormEventbrite = () => {
    let searchString = document.querySelector("#meetups-input").value;

    // clear the resultsContainer's previous search results
    let resultsContainer = document.querySelector(".list-group")
    resultsContainer.innerHTML = ""

    // remove line below when done testing
    console.log(`Eventually will search for "${searchString}"`);

    // prevent empty string search 
    if (searchString) {
        getEventbriteData(searchString)
        .then(({events}) => {
            events.forEach(event => {
                // save 'name' and 'address' to variables for result card creation
                const name = event.venue.name
                const address = `${event.venue.address.address_1} ${event.venue.address.address_2}`
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
}

const searchFormParks = () => {
    let searchString = document.querySelector("#parks-input").value;
    if (searchString) {
        getParksData(searchString)
            .then(( parks ) => {
                // console.log(parks)
                parks.forEach(park => {
                    let parkAddress = park.mapped_location.human_address.split("\"")[3]
                    console.log(parkAddress)
                    console.log(park.park_name, park.mapped_location.human_address)
                })
            })
    }
}

//grabs the search input and queries the Ticketmaster API
const searchFormTicketmaster = () => {
    const searchString = document.querySelector("#concerts-input").value
    if (searchString) {
        getTicketmasterData(searchString)
            .then(concerts => {
                //returns name and address of each concert
                concerts._embedded.events.forEach(concert => {
                    concerts.name = concert.name
                    concerts.address = concert._embedded.venues[0].address.line1
                    console.log(concerts.name, concerts.address)
                })
            }
            )
    }
}  

const getZomatoDate = (searchString) => {
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchKeyWord}&count=100`)
    .then(restaurants => restaurants.json())
}
