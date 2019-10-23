// Purpose: This file populates the Search section of the index.html page.

//function for search button event listener
<<<<<<< HEAD
//grabs the search input
const searchFormTicketmaster = () => {
    const searchInput = document.querySelector("#concerts-input").value
    getTicketmasterData(searchInput)
        .then(parsedConcerts => console.log(parsedConcerts))
}
=======
>>>>>>> master


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
    console.log(`Eventually will search for "${searchString}"`); // remove when done testing
    if (searchString) {
        getEventbriteData(searchString)
            .then(({ events }) => {
                // console.log({events}.events)
                events.forEach(event => {
                    // console.log(event.name, event.description);
                    // console.log(event.start)
                    // console.log(event.venue.name)
                    // console.log(event.venue.address) // returns object
                    const eventEl = createEventbriteHtml(event)
                    console.log(eventEl)
                    renderEventbrite(eventEl)
                })
            })
    }
}

const searchFormZomato = () => {
    let searchString = document.querySelector("#restaurant-input").value;
    if (searchString) {
        getZomatoData(searchString)
            .then(({ events }) => {
                events.foreach(event => {
                    const eventEl = createZomatoHtml(event)
                    renderZomato(eventEl)
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

