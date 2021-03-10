let firstimages = []
let secondimages = []


let  returnCard = function trackInfo() {

  return `<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"></rect>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
      <img class="img-fluid" src=${firstimages.images.url} />
      </text>
    </svg>
    <div class="card-body">
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>
          `
}

const createCards = () => {
  const getClassimage = document.getElementById("firstImageSection")

firstimages.forEach(eminemTrack => firstImageSection.innerHTML = firstImageSection.innerHTML + returnCard(eminemTrack))

  // REDUCE example

  // const reducedHTML = eminemTracks.reduce((finalHTML, eminemTrack) => finalHTML + returnCard(eminemTrack), "")

  // console.log(reducedHTML)

  // eminemSection.innerHTML = reducedHTML


  // metallicaTracks.forEach(metallicaTrack => metallicaSection.innerHTML += returnCard(metallicaTrack))


  // behemothTracks.forEach(behemothTrack => behemothSection.innerHTML += returnCard(behemothTrack))


}


window.onload = function() {  
  const firstimagespromis = fetch("http://www.splashbase.co/api/v1/images/search?query=laptop").then(response => response.json())
  const secondary = fetch("http://www.splashbase.co/api/v1/images/search?query=camera").then(response => response.json())
  Promise.all([firstimagespromis, secondary]).then(responses => {
    firstimages = responses[0].images
    console.log(firstimages)
    secondimages = responses[1].images
    console.log(secondimages)
  }).catch(
    err => console.log(err))
}
