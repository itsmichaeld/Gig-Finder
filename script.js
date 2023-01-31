// e9936476510a984d655a5af81258f7e8
const gigs = document.getElementById("gigs");
const username = document.getElementById("username");
const searchBtn = document.getElementById("search-btn");
const favouriteArtistsParagraph = document.getElementById("favourite-artists");
let favouriteArtists = [];

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username.value}&api_key=e9936476510a984d655a5af81258f7e8&limit=10&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      Object.values(data.topartists.artist).forEach((element) => {
        favouriteArtistsParagraph.innerHTML += `<p>${element.name}</p>`;
        favouriteArtists.push(element.name);
      });
    });
});
