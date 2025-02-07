//React
import { Pressable, Image } from 'react-native'
import React from 'react'

interface MoviePosterComponentProps {
  id:number;
  poster:string;
  smallPoster?:boolean;
  className?:string;
}

const MoviePosterComponent = ({ id, poster, smallPoster = false, className }:MoviePosterComponentProps) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
    >
      <Image 
      source={{ uri:poster }} 
      className='shadow-lg rounded-2xl w-full h-full' 
      style={{ width:smallPoster ? 80 : 150, height:smallPoster ? 120 : 250 }}
      resizeMode='cover'
      />
    </Pressable>
  )
}

export default MoviePosterComponent