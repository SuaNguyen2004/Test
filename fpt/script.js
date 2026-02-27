// let Trailer = true;

// function xemTrailer() {
//   if (Trailer == true) {
//     document.getElementsByTagName("img")[2].src =
//       "src= https://www.youtube.com/embed/BD6PoZJdt_M?si=x0gIxB4jJuUsVsYG";
//     Trailer = false;
//   } else {
//     document.getElementsByTagName("img")[2].src = "640x396-muado.jpg";
//     Trailer = true;
//   }
// }

// let listFilm = {
//     {
//         id : 1,
//         name : "Mưa đỏ",
//         type: "Phim chiếu rạp"
//         trailer: "src= https://www.youtube.com/embed/BD6PoZJdt_M?si=x0gIxB4jJuUsVsYG"
//     },
//     {
//         id : 2,
//         name : "Conan",
//         type: "Phim điện ảnh hay nhất"
//         trailer: "src= https://www.youtube.com/embed/BD6PoZJdt_M?si=x0gIxB4jJuUsVsYG"
//     }
// };

// let bannerElement = document.getElementsByClassName("container")[0];
// let filmNationElement = document.getElementsByClassName("tt-nation")[0];
// function viewTrailer(){
//     let TrailerElement = document.getElementsByClassName("trailer")[0];
//     bannerElement.style.display = "none";
//     TrailerElement.style.display = "block";
// }
// function chooseFilm(filmId){
//     let selectedFilm = listFilm.find(film => film.id === filmId);
//     bannerElement.style.backgroundImage = "url" + "('" + selectedFilm.banner + "')";
// }
// let isPlaying = false;

// function xemTrailer() {
//   const banner = document.getElementById("banner");

//   if (!isPlaying) {
//     banner.style.backgroundImage = "none";
//     banner.innerHTML = `
//             <iframe
//               src="https://www.youtube.com/embed/BD6PoZJdt_M?si=x0gIxB4jJuUsVsYG&autoplay=1&mute=1"
//               allow="autoplay; encrypted-media"
//               allowfullscreen>
//             </iframe>
//           `;
//   } else {
//     banner.innerHTML = "";
//     banner.style.backgroundImage = "url('640x396-muado.jpg')";
//   }

//   isPlaying = !isPlaying;
// }
let currentTrailer = "";

function selectMovie(element) {
  const image = element.getAttribute("data-image");
  const trailer = element.getAttribute("data-trailer");
  const title = element.getAttribute("data-title");
  const year = element.getAttribute("data-year");
  const duration = element.getAttribute("data-duration");
  const country = element.getAttribute("data-country");
  const rating = element.getAttribute("data-rating");

  const banner = document.getElementById("banner");
  banner.style.backgroundImage = `url('${image}')`;

  banner.innerHTML = `
    <div class="movie-info">
      <h2>${title}</h2>
      <ul>
        <li>${rating}</li>
        <li>${year}</li>
        <li>${duration}</li>
        <li>${country}</li>
      </ul>
    </div>
  `;

  currentTrailer = trailer;
}

function xemTrailer() {
  if (!currentTrailer) {
    alert("Vui lòng chọn phim trước!");
    return;
  }

  const banner = document.getElementById("banner");
  banner.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="${currentTrailer}?autoplay=1&mute=0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
}
