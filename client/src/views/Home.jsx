import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Books from '../components/Books.jsx';
import { setBooksAsync } from '../store/actions/books.js';
import { setDate } from '../store/actions/date.js';
import { setFavoritesAsync } from '../store/actions/favorites.js';

export default function Home() {
  const date = useSelector(state => state.date)
  const books = useSelector(state => state.books)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBooksAsync(date.data))
    // eslint-disable-next-line
  }, [date.data])

  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    dispatch(setDate(event.target.date.value));
  };
  
  const addFavorites = (book) => {
    dispatch(setFavoritesAsync({
      imageUrl: book.book_image,
      title: book.title,
      description: book.description,
      author: book.author
    }))
  }

  if (books.error) {
    return <h1>Something Error</h1>;
  }

  return (
    <div>
      <h1>Find best seller books by date</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="date" name="date" />
        <button type="submit">Search</button>
      </form>
      <div className="container">
      {
        books.loading ?
        <h1>Loading...</h1> :
        !books.data ?
        <h1>No books data found, please change your date input (Date input must be before today)</h1> :
        books.data.map((book, index) => {
          return (
            <div className="book" key={index}>
              <Books
                imageUrls={book.book_image}
              />
              <Link
                to={{
                  pathname: `/books/${book.rank}`,
                  state: {
                    imageUrl: book.book_image,
                    title: book.title,
                    description: book.description,
                    author: book.author
                  }
                }}
              ><button className="buttonDetail">See Detail</button>
              </Link>
                <button
                className="buttonFavorites"
                  onClick={() => addFavorites(book)}
                >Add to Favorites</button>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}