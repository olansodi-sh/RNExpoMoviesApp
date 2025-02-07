
import { NowPlayingMoviesAction } from "@/core/actions/movies/now-playing.action"
import { PopularMoviesAction } from "@/core/actions/movies/popular.action"
import { TopRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { UpComingMoviesAction } from "@/core/actions/movies/up-coming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

  // Ultimas Peliculas
  const nowPlayingQuery = useQuery({ 
      queryKey: ['movies','nowPlaying'], 
      queryFn: () => NowPlayingMoviesAction(),
      staleTime: 1000 * 60 * 60 * 24 // 24 mantiene fresca la data por 24 horas 
  })

  // Peliculas Populares
  const popularQuery = useQuery({ 
      queryKey: ['movies','popular'], 
      queryFn: () => PopularMoviesAction(),
      staleTime: 1000 * 60 * 60 * 24 // 24 mantiene fresca la data por 24 horas 
  })

  //Mejores Peliculas
  const topRatedQuery = useQuery({ 
    queryKey: ['movies','topRated'], 
    queryFn: () => TopRatedMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24 // 24 mantiene fresca la data por 24 horas 
  })
  //Mejores Peliculas
  const upComingQuery = useQuery({ 
    queryKey: ['movies','upComing'], 
    queryFn: () => UpComingMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24 // 24 mantiene fresca la data por 24 horas 
  })

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery
  }
}