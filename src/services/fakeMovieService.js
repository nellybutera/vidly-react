import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
    cover: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F5%2F5f%2FTerminator_Dark_Fate_poster.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTerminator%3A_Dark_Fate&tbnid=cpO7Gecym0y09M&vet=12ahUKEwit47y-tNjyAhVP4oUKHexsBioQMygAegUIARCvAQ..i&docid=Gu9-FFAMg8i2PM&w=253&h=395&q=terminator%20dark%20fate&ved=2ahUKEwit47y-tNjyAhVP4oUKHexsBioQMygAegUIARCvAQ"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Vincenzo",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.kepoper.com%2Fvincenzo-kdrama-trivia%2F&psig=AOvVaw0wgNu6GvSLeyB7TsoC26z5&ust=1630401539956000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDA2pu12PICFQAAAAAdAAAAABAJ"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoviesanywhere.com%2Fmovie%2Fget-out&psig=AOvVaw1HhL_3JulPYhHCiJsAGTZl&ust=1630401607672000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj4k7212PICFQAAAAAdAAAAABAD"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2967006%2F&psig=AOvVaw1EDfVcSuZMg2B8UuQKPGAy&ust=1630401654418000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCagdC12PICFQAAAAAdAAAAABAD"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2967006%2F&psig=AOvVaw1EDfVcSuZMg2B8UuQKPGAy&ust=1630401654418000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCagdC12PICFQAAAAAdAAAAABAD"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoviesanywhere.com%2Fmovie%2Fget-out&psig=AOvVaw1HhL_3JulPYhHCiJsAGTZl&ust=1630401607672000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj4k7212PICFQAAAAAdAAAAABAD"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Romance" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    cover: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F5%2F5f%2FTerminator_Dark_Fate_poster.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTerminator%3A_Dark_Fate&tbnid=cpO7Gecym0y09M&vet=12ahUKEwit47y-tNjyAhVP4oUKHexsBioQMygAegUIARCvAQ..i&docid=Gu9-FFAMg8i2PM&w=253&h=395&q=terminator%20dark%20fate&ved=2ahUKEwit47y-tNjyAhVP4oUKHexsBioQMygAegUIARCvAQ"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.kepoper.com%2Fvincenzo-kdrama-trivia%2F&psig=AOvVaw0wgNu6GvSLeyB7TsoC26z5&ust=1630401539956000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDA2pu12PICFQAAAAAdAAAAABAJ"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2967006%2F&psig=AOvVaw1EDfVcSuZMg2B8UuQKPGAy&ust=1630401654418000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCagdC12PICFQAAAAAdAAAAABAD"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}