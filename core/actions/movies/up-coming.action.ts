import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const UpComingMoviesAction = async () => {
    try {
        
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');
        // console.log('NowPlayingAction', JSON.stringify(data, null, 2));

        // se pasan por el mapper para traer solo la información que se necesita
        const movies = data.results.map((movie)=>MovieMapper.fromTheMovieDBToMovie(movie));
        console.log('UpComingMoviesAction', movies);
        return movies;
    } catch (error) {
        console.log('Error in UpComingMoviesAction', error);
    }
}