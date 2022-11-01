import styles from "./PeliCard.module.css";

export function PeliCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
  <li className={styles.peliCard}>
    <img
    width={230}
    height={345}
    className={styles.movieImage}src={imageUrl} alt={movie.title} />
    <div>{movie.title}</div>
  </li>
  );
}
