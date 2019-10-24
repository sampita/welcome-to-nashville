// Purpose: This file populates the Results section of the index.html page
// This function will append search results to DOM.
const renderResultsContainer = () => {
    // Creates variable to be called and appended to index element with class of resultsContainer.
    const searchResults = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        <h3>Results</h3>
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

// factory function to add saved result to corresponding category in the itineraryContainer
const addToItinerary = (name, category) => {
  let categoryField = document.querySelector(`#${category}-itinerary`)
  categoryField.innerText = name
}

// factory function that grabs the textContent of the result that the save was clicked on
const saveCard = () => {
  // get card Id from event
  let cardId = event.target.id.split("--")[1];
  let category = event.path[1].id.split("--")[0]
  console.log("card class", category);
  let cardToSave = document.querySelector(`#${category}--${cardId} > #name`).textContent;
  console.log("card text", cardToSave);
  addToItinerary(cardToSave, category)
}

const renderZomato = (htmlElement) => {
  console.log("Rendering Zomato Results")
  let resultContainer = document.querySelector(".resultsContainer")
  resultContainer.innerHTML += htmlElement
}

const createZomatoHtml = (restaurants) => {
  return `<p>${restaurants.restaurant.name}</p>`
}
// factory function that renders search results to the resultsContainer
const renderCardToDom = (card) => {
  let cardList = document.querySelector(".list-group")
  cardList.appendChild(card);
}

// iterate length of current card list and create new id
const getNewIdNumber = () => {
  let cardArrayLength = document.getElementsByClassName("list-group-item").length;
  console.log("card array", cardArrayLength);
  return cardArrayLength + 1 // prevent 0-indexed card id list
}

// function that should be called in the .forEach loop of the fetch call flow
const createCardContainer = (name, location, category) => {
  // console.log("name", name)
  const cardContainer = document.createElement("li")
  cardContainer.className = `${category} list-group-item`;
  let idNumber = getNewIdNumber();
  cardContainer.id = `${category}--${idNumber}`;

  const nameElement = document.createElement("p");
  nameElement.id = "name"
  nameElement.textContent = name;

  const locationElement = document.createElement("p");
  locationElement.id = "location"
  locationElement.textContent = location;

  const saveElement = document.createElement("button")
  saveElement.id = `save--${idNumber}`;
  saveElement.textContent = "Save";
  saveElement.addEventListener("click", saveCard);

  // add child items to card
  cardContainer.appendChild(nameElement);
  cardContainer.appendChild(locationElement);
  cardContainer.appendChild(saveElement);
  // console.log(cardContainer);
  return cardContainer
}