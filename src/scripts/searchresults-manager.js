// Purpose: This file populates the Results section of the index.html page

const renderEventbrite = (htmlElement) => {
    console.log("Rendering Eventbrite results")
    let resultContainer = document.querySelector(".resultsContainer")
    resultContainer.innerHTML += htmlElement
}

const createEventbriteHtml = (event) => {
    return `<p>${event.name.text}</p>`
}