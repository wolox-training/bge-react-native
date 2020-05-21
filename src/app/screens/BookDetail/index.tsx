import React from 'react';

import { BOOKS } from '../Library/mockupData';

import BookCard from './components/BookCard';

function BookDetail() {
  const { imageUrl, title, author, genre, year, isAvailable } = BOOKS[3];

  return (
    <BookCard
      imageUrl={imageUrl}
      title={title}
      author={author}
      genre={genre}
      year={year}
      isAvailable={isAvailable}
    />
  );
}

export default BookDetail;
