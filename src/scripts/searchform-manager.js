// Purpose: This file populates the Search section of the index.html page.

const searchInput = document.querySelector(".concertsInput").innerHTML


// This function builds the search form and prints it to the DOM
const buildSearchForm = () => {
    const searchForm = `
    <input type="text" placeholder="parks by feature">
    <button id="parksSearchButton">Search</button>
    
    <input type="text" placeholder="restaurants by food type">
    <button id="restaurantsSearchButton">Search</button>
    
    <input type="text" placeholder="meetups by topic">
    <button id="meetupsSearchButton">Search</button>
    
    <input type="text" placeholder="concerts by genre" class="concertsInput">
    <button id="concertsSearchButton">Search</button>
    `
    // Gets reference to Search container in the index.html file and prints the above HTML code to the DOM.
    const searchContainer = document.querySelector(".searchContainer")
    searchContainer.innerHTML = searchForm

}