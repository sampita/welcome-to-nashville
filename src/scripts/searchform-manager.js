// Purpose: This file populates the Search section of the index.html page.


// This function builds the search form and prints it to the DOM
const buildSearchForm = () => {
    const searchForm = `
    <input type="text" placeholder="parks by feature">
    <button>Search</button>
    <!-- restaurants search  -->
    <input type="text" placeholder="restaurants by food type">
    <button>Search</button>
    <!-- meetups search -->
    <input type="text" placeholder="meetups by topic">
    <button>Search</button>
    <!-- concerts search  -->
    <input type="text" placeholder="concerts by genre">
    <button>Search</button>
    `
    // Gets reference to Search container in the index.html file and prints the above HTML code to the DOM.
    const searchContainer = document.querySelector(".searchContainer")
    searchContainer.innerHTML = searchForm

}