// Purpose: This file populates the Search section of the index.html page.

//function for search button event listener
//grabs the search input
const searchFormTicketmaster = () => {
    const searchInput = document.querySelector("#concerts-input").value
    getTicketmasterData(searchInput)
    .then(parsedConcerts => console.log(parsedConcerts))
}  


// This function builds the search form and prints it to the DOM
const buildSearchForm = () => {
    const searchForm = `
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
    console.log(`Eventually will search for "${searchString}"`); // remove when done testing
    if (searchString) {
        getEventbriteData(searchString)
        .then(({events}) => {
            // console.log({events}.events)
            events.forEach(event => {
                // console.log(event.name, event.description);
                // console.log(event.start)
                // console.log(event.venue.name)
                const name = event.venue.name
                const address = `${event.venue.address.address_1} ${event.venue.address.address_2}`
                console.log('name:', name)
                console.log('address:', address)
                const eventEl = createCardContainer(name, address, "meetup")
                // console.log("eventEl", eventEl)
                renderCardToDom(eventEl)
            })
        })
    }
}
