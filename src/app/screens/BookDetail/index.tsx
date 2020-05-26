import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/stack';

import BookCard from './components/BookCard';

type Props = StackScreenProps<RootStackParamList, 'BookDetail'>;

function BookDetail({ route }: Props) {
  const book = route.params && route.params.book;

  return <BookCard {...book} />;
}

export default BookDetail;
