//React
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'

//Hooks
import { useMovies } from '@/presentation/hooks/useMovies.hook'

//Components
import MainSlideShowComponent from '@/presentation/components/movies/mainSlideShow.component'
import MovieHorizontalListComponent from '@/presentation/components/movies/movieHorizontalList.component'


const HomeScreen = () => {
  
  //gestionar las áreas seguras de un dispositivo
  const safeArea = useSafeAreaInsets()

  const { nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }
  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-center text-3xl font-bold'>Movies App</Text>
        {/* Últimas Películas */}
        <MainSlideShowComponent movies={nowPlayingQuery.data ?? []} />
        {/* Películas Populares */}
        <MovieHorizontalListComponent title={'Populares'} movies={popularQuery.data ?? []}/>
        {/* Mejores Películas */}
        <MovieHorizontalListComponent title={'Mejores Películas'} movies={topRatedQuery.data ?? []}/>
        {/* Próximas Películas */}
        <MovieHorizontalListComponent title={'Próximas Pelícuslas'} movies={upComingQuery.data ?? []}/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen