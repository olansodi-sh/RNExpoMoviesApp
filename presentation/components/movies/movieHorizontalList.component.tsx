//React
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef } from 'react'

//Interfaces
import { Movie } from '@/infrastructure/interfaces/movie.interface'

//Components
import MoviePosterComponent from './moviePoster.component'

interface MovieHorizontalListComponentProps {
  movies:Movie[];
  title?:string;

  loadNextPage?:() => void;
}

const MovieHorizontalListComponent = ({ movies, title, loadNextPage }:MovieHorizontalListComponentProps) => {

  const isLoading = useRef(false)

  const onScroll =  (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return;

    const { contentOffset, contentSize, layoutMeasurement} = event.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width ? true : false

    if (!isEndReached) return

      isLoading.current = true
      console.log('Cargar siguientes peliculas')

      loadNextPage && loadNextPage()
  }

  return (
    <View>
      {
        title && <Text className='text-2xl font-bold px-4 '>{title}</Text>
      }

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      onScroll={(event) => onScroll(event)}
      renderItem={({ item }) => (
        <MoviePosterComponent id={item.id} poster={item.poster} smallPoster/>
      )}
      />
    </View>
  )
}

export default MovieHorizontalListComponent