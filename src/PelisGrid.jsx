import { PeliCard } from './PeliCard';
import movies from './movies.json';
import styles from "./PelisGrid.module.css";

export function PelisGrid() {
  return (
    <ul className={styles.pelisGrid}>
        {movies.map((movie) => ( 
            <PeliCard key={movie.id} movie={movie} />
        )) }
    </ul>
    );
}