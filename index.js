let firstimages = []
let secindimages = []
window.onload() = function() {  
  const firstimagespromis = fetch("http://www.splashbase.co/api/v1/images/search?query=your").then(response => response.json())
  const secondary = fetch("http://www.splashbase.co/api/v1/images/search?query=your").then(response => response.json())
  Promise.all
}