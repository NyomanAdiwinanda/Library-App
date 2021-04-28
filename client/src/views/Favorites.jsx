import React from 'react';
import { useSelector } from 'react-redux'

export default function Favorites() {
  const favorites = useSelector(state => state.favorites)

  if (favorites.data.length === 0) {
    return <h1>Your favorites is empty</h1>
  } else {
    return (
      <div>
      <h1>Your Favorite Book Lists</h1>
      {
        favorites.data.map((favorite, index) => {
          return (
            <>
              <h1># {index+1}</h1>
              <img src={favorite.imageUrl} alt="..."/>
              <h3>Title: {favorite.title}</h3>
              <h3>Description: {favorite.description}</h3>
              <h3>Author: {favorite.author}</h3>
            </>
          )
        })
      }
      </div>
    )
  }
}
