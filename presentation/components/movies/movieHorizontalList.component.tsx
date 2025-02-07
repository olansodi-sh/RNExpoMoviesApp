//React
import { View, Text, FlatList } from 'react-native'
import React from 'react'

//Interfaces
import { Movie } from '@/infrastructure/interfaces/movie.interface'

//Components
import MoviePosterComponent from './moviePoster.component'

interface MovieHorizontalListComponentProps {
  movies:Movie[];
  title?:string;
}

const MovieHorizontalListComponent = ({ movies, title }:MovieHorizontalListComponentProps) => {
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
      renderItem={({ item }) => (
        <MoviePosterComponent id={item.id} poster={item.poster} smallPoster/>
      )}
      />
    </View>
  )
}

export default MovieHorizontalListComponent