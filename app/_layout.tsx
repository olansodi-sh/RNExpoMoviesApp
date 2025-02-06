
//React
import { View, Text } from 'react-native'
import React from 'react'

//Estilos
import "../global.css";

//Pantallas

//Acciones
import { NowPlayingAction } from '@/core/actions/movies/now-playing.action';

//Librerias
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Stack } from 'expo-router';

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {

  NowPlayingAction();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack 
       screenOptions={{
        headerShown: false
       }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout