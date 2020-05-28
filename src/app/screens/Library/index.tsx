import React from 'react';
import { NavigationProps } from '@interfaces/navigation';
import { Book } from '@interfaces/book';
import ROUTES from '@constants/routes';

import BookList from './components/BookList';
import { BOOKS } from './mockupData';

function Library({ navigation }: NavigationProps) {
  const goToBookDetail = (book: Book) => () => navigation.navigate(ROUTES.BOOK_DETAIL, { book });

  return <BookList books={BOOKS} onPress={goToBookDetail} />;
}

export default Library;
