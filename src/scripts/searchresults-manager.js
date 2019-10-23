// Purpose: This file populates the Results section of the index.html page
// This function will append search results to DOM.
const resultsFunction = () => {
    // Creates variable to be called and appended to index element with class of resultsContainer.
    const searchResults = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        Results
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>`
    // States variable to query select and eventually appends searchResults innerHTML into  
    const resultsContainer = document.querySelector(".resultsContainer")
    resultsContainer.innerHTML = searchResults
}

const renderEventbrite = (htmlElement) => {
    console.log("Rendering Eventbrite results")
    let resultContainer = document.querySelector(".resultsContainer")
    resultContainer.innerHTML += htmlElement
}

const createEventbriteHtml = (event) => {
    return `<p>${event.name.text}</p>`
}

const renderParks = (htmlElement) => {
  console.log("Rendering Parks results")
  let resultContainer = document.querySelector(".resultsContainer")
  resultContainer.innerHTML += htmlElement
}

const createParksHtml = (event) => {
    return `<p>${event.name.text}</p>`
}