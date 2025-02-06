
// es una función de JavaScript que se utiliza para recorrer o mostrar una lista de objetos similares de un componente

import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result):Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: movie.release_date,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }
}