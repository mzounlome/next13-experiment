import "./Movie.css";

import Link from "next/link";

export default function Movie({
  backdrop_path,
  release_date,
  title,
  vote_average,
  id,
  runtime,
}) {
  console.log(backdrop_path);
  const imagePath = `https://image.tmdb.org/t/p/w300${backdrop_path}`;
  return (
    <div className="grid">
      <Link href={`/${id}`}>
        <h2>{title}</h2>
        <img src={imagePath} width={200} height={200} alt="" />
        <p> Released: {release_date}</p>
        <p>Rating: {vote_average}</p>
      </Link>
    </div>
  );
}
