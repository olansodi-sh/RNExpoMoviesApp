import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies.hook'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShowComponent from '@/presentation/components/movies/mainSlideShow.component'

const HomeScreen = () => {
  
  //gestionar las áreas seguras de un dispositivo
  const safeArea = useSafeAreaInsets()

  const { nowPlayingQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }
  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
      <Text className='text-center text-xl font-bold'>Movies App</Text>

      <MainSlideShowComponent movies={nowPlayingQuery.data ?? []} />
    </View>
  )
}

export default HomeScreen