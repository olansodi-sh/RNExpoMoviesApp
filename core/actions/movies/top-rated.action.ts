import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const TopRatedMoviesAction = async () => {
    try {
        
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');
        // console.log('NowPlayingAction', JSON.stringify(data, null, 2));

        // se pasan por el mapper para traer solo la información que se necesita
        const movies = data.results.map((movie)=>MovieMapper.fromTheMovieDBToMovie(movie));
        return movies;
    } catch (error) {
        console.log('Error in TopRatedMoviesAction', error);
    }
}