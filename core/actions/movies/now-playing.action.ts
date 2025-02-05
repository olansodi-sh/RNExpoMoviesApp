import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const NowPlayingAction = async () => {
    try {
        
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        console.log('NowPlayingAction', JSON.stringify(data, null, 2));
    } catch (error) {
        console.log('Error in NowPlayingAction', error);
    }
}