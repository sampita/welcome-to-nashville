// This function will append search results to DOM
const resultsFunction = () => {
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

  const resultsContainer = document.querySelector(".resultsContainer")
  resultsContainer.innerHtml = searchResults

}