const itineraryContainer = document.querySelector(".itineraryContainer")
// This function will put the HTML string in the DOM for users to see
const createItineraryContainer = () => {
    // This return contains the string that has the HTML elements
    return `
    <article class="itinerary">
        <h3>Itinerary</h3>
            <h5 id="park-itinerary"><strong>Parks:</strong></h5>
            <p id="park-results"></p>
            <h5 id="restaurant-itinerary"><strong>restaurants:</strong></h5>
            <p id="restaurant-results"></p>
            <h5 id="meetup-itinerary"><strong>meetups:</strong></h5>
            <p id="meetup-results"></p>
            <h5 id="concert-itinerary"><strong>concerts:</strong></h5>
            <p id="concert-results"></p>
    </article>
    `
}
// This places the function inside in the index.html
itineraryContainer.innerHTML = createItineraryContainer()