const renderPageTitle = () => {
    // TODO: write factory function to create main page header and then call this function in main.js
    // TODO: get container element
    let container = document.querySelector("#welcome-title")
    console.log(container)
    // TODO: create HTML element
    let headerEl = document.createElement("h1");
    headerEl.id = "title";
    headerEl.innerText = "Welcome to Nashville!"
    console.log(headerEl);
    container.appendChild(headerEl)
    // TODO: write HTML to dom
}