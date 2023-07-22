const movieName = prompt("Film name");
const movieGanre = prompt("Film ganre");
const movieAuthor = prompt("Film author");
const movieYear = prompt("Film year");

let movieDB = {
  name: movieName,
  ganre: movieGanre,
  author: movieAuthor,
  year: movieYear,
  showFilm: function () {
    alert(
      `Сьогодні поговоримо про фільм ${movieDB.name}, його було виконано в жанрі ${movieDB.ganre}. Автором Фільму став ${movieDB.author} котрий зняв його в ${movieDB.year} році.`
    );
  },
};

const filmQesh = confirm(`Чи бажаєте ви отримати кінцевий опис фільму?`);

function filmStart() {
  if (filmQesh) {
    movieDB.showFilm();
  }
}

filmStart();
