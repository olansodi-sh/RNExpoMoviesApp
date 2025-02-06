import { NowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

  // Queries
  const nowPlayingQuery = useQuery({ 
      queryKey: ['movies','nowPlaying'], 
      queryFn: () => NowPlayingAction(),
      staleTime: 1000 * 60 * 60 * 24 // 24 mantiene fresca la data por 24 horas 
  })

  return {
    nowPlayingQuery
  }
}