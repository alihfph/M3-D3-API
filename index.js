let firstimages = [];
let secondimages = [];
// window.onload = function () {
//   const firstimagespromis = fetch(
//     "https://striveschool-api.herokuapp.com/api/search?q=eminem"
//   ).then((response) => response.json());
//   const secondary = fetch(
//     "https://striveschool-api.herokuapp.com/api/search?q=metallica"
//   ).then((response) => response.json());
//   Promise.all([firstimagespromis, secondary])
//     .then((responses) => console.log(responses))
//     .then((responses) => {
//       firstimages = responses[0].data[0].album.cover_medium;
//       console.log(firstimages);
//     })
//     .catch((err) => console.log(err));
// };

// window.onload = () => {
//   const tablePromise = fetch(
//     "http://www.splashbase.co/api/v1/images/search?query=tables"
//   )
//     .then((response) => response.json())

// };

// console.log(`${firstimages}
// ${secindimages}`);

// const loadFirstImages = () => {};

let returnCard = (url) => {
  return `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="${url}"/>
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
 `;
};

let returnCardSecond = (url) => {
  return `<div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${url}"/>
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
   `;
};

const createCards = () => {
  const container = document.querySelector(".firstImageSection");
  container.innerHTML = "";
  firstimages.forEach((image) => {
    container.innerHTML += returnCard(image.url);
  });
};

const createSecondaryCards = () => {
  const container = document.querySelector(".secondImageSection");
  container.innerHTML = "";
  secondimages.forEach((image) => {
    container.innerHTML += returnCardSecond(image.url);
  });
};

window.onload = function () {
  const firstimagespromis = fetch(
    "http://www.splashbase.co/api/v1/images/search?query=laptop"
  ).then((response) => response.json());
  const secondary = fetch(
    "http://www.splashbase.co/api/v1/images/search?query=camera"
  ).then((response) => response.json());
  Promise.all([firstimagespromis, secondary])
    .then((responses) => {
      firstimages = responses[0].images;
      console.log(firstimages);
      secondimages = responses[1].images;
      console.log(secondimages);
    })
    .catch((err) => console.log(err));
};
