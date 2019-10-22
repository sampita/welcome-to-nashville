// Purpose: The point of this file is to handle all API requests.

ticketmasterApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"

// TODO: write fetch call for ticketmaster API
const getTicketmasterData = (searchString) => {


    return fetch(`${ticketmasterApiBaseUrl}events.json?classificationName=music&dmaId=343&apikey=${ticketmasterApiKey}&q=${searchString}`)
    .then(concerts => concerts.json())
}

const foodTypeSearch = function() {
    return "what do you call a Japanese drummer boy, whose father has diarrhea? A slap happy jappy, with a crap happy pappy..."
}


const getEventbriteData = () => {
    console.log("Here is where the cool stuff will go");
}
