import "./page.module.css";

import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <main className="grid-div">
      <h1>Hello everyone!</h1>
      {res.results.map((movie) => (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        </div>
      ))}
    </main>
  );
}
