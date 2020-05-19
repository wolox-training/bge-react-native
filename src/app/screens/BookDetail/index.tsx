import React from 'react';

import { BOOKS } from '../Library/mockupData';

import BookCard from './components/BookCard';

function BookDetail() {
  const { imageUrl, title, author, genre, year } = BOOKS[1];

  return <BookCard imageUrl={imageUrl} title={title} author={author} genre={genre} year={year} />;
}

export default BookDetail;
