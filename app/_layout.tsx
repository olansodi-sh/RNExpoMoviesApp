import { View, Text } from 'react-native'
import React from 'react'

import "../global.css";
import { NowPlayingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {

  NowPlayingAction();
  return (
    <View>
      <Text className='text-3xl'>RootLayout</Text>
    </View>
  )
}

export default RootLayout