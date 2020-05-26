import React from 'react';
import { useRoute } from '@react-navigation/native';
import { BookDetailRouteType } from '@interfaces/routeType';

import BookCard from './components/BookCard';

function BookDetail() {
  const route: BookDetailRouteType = useRoute();
  const { book } = route.params;

  return <BookCard {...book} />;
}

export default BookDetail;
