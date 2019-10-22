const searchFormEventbrite = () => {
    let searchString = document.querySelector("#eventbrite-search").value;
    console.log(`Eventually will search for "${searchString}"`); // remove when done testing
    if (searchString) {
        getEventbriteData(searchString)
        .then(({events}) => {
            // console.log({events}.events)
            events.forEach(event => {
                console.log("Got 'em", event)
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

const renderToDom = (htmlElement) => {
    let container = document.querySelector(".searchContainer")
    // console.log(container);
    container.appendChild(htmlElement);
}

// might not keep this, just for individual testing
const buildSearchForm = () => {
    const searchElement = document.createElement("div") // don't use 'form', refreshes page

    const headerElement = document.createElement("h3")
    headerElement.innerText = "Search for stuff to do today"

    const labelElement = document.createElement("label")
    labelElement.htmlFor = "eventbrite-search"
    labelElement.textContent = "Meetup:"

    const inputElement = document.createElement("input")
    inputElement.id = "eventbrite-search"
    inputElement.placeholder = "Search meetup by topic"

    const buttonElement = document.createElement("button")
    buttonElement.innerText = "Search"
    buttonElement.onclick = searchFormEventbrite

    searchElement.appendChild(headerElement)
    searchElement.appendChild(labelElement)
    searchElement.appendChild(inputElement)
    searchElement.appendChild(buttonElement)
    // console.log(searchElement);
    renderToDom(searchElement);
}
// buildSearchForm();