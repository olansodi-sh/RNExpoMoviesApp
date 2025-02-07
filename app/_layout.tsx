
//React
import React from 'react'

//Estilos
import "../global.css";

//Pantallas

//Acciones
import { NowPlayingMoviesAction } from '@/core/actions/movies/now-playing.action';

//Librerias
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router';

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {

  NowPlayingMoviesAction();
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