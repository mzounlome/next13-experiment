export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params, title }) {
  const movie = { params };
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <div>
        <h2>{res.title}</h2>
        <h2>{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2>{res.status}</h2>
        {
          <img
            className="my-12"
            width={500}
            height={500}
            src={res.backdrop_path}
          />
        }
      </div>
    </div>
  );
}
