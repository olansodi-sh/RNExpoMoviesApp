import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const NowPlayingAction = async () => {
    try {
        
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        // console.log('NowPlayingAction', JSON.stringify(data, null, 2));

        // se pasan por el mapper para traer solo la información que se necesita
        const movies = data.results.map((movie)=>MovieMapper.fromTheMovieDBToMovie(movie));
        console.log('movies', movies);
        return movies;
    } catch (error) {
        console.log('Error in NowPlayingAction', error);
    }
}