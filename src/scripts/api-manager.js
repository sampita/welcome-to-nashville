console.log("orange skeletons rock")

const foodTypeSearch = function() {
    return "what do you call a Japanese drummer boy, whose father has diarrhea? A slap happy jappy, with a crap happy pappy..."
}

const concertSearch = event => {
    const inputField = document.QuerySelector(".searchContainer")
}  

const getEventbriteData = (searchString) => {
    /* TODO: UNCOMMENT BELOW WHEN EVENTBRITE-API 'EVENTS' ENDPOINT IS CONFIRMED WORKING */
    // fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${eventbriteApiKey}`, {
    //     "headers": {
    //         "Accept": "application/json"
    //     }
    // }
    return fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(r => r.json())
}
