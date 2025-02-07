// React
import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'

//Interfaces
import { Movie } from '@/infrastructure/interfaces/movie.interface'

//Librerías
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePosterComponent from './moviePoster.component';


interface MainSlideShowComponentProps {
  movies: Movie[];
}

const MainSlideShowComponent = ({movies}:MainSlideShowComponentProps) => {

  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width

  return (
    <View className='h-[250px] w-full'>
      <Carousel
      ref={ref}
        data={movies}
        style={{ 
          width, 
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }} // Estilo de las tarjetas internas
        width={200} // Grosor de las tarjetas internas
        height={350} // Altura de las tarjetas internas
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,

        }}
        defaultIndex={1}
        renderItem={
          ({ item }) => (
            <MoviePosterComponent id = {item.id} poster = {item.poster} />
          )
        }
        />
    </View>
  )
}

export default MainSlideShowComponent