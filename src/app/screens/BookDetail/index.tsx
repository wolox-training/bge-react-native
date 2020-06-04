import React from 'react';
import { useRoute } from '@react-navigation/native';
import { BookDetailRouteType } from '@interfaces/routeType';
import { ScrollView } from 'react-native-gesture-handler';

import BookCard from './components/BookCard';
import CommentList from './components/CommentsList';
import { COMMENTS } from './mockupDAta';

function BookDetail() {
  const route: BookDetailRouteType = useRoute();
  const { book } = route.params;

  return (
    <ScrollView>
      <BookCard {...book} />
      <CommentList comments={COMMENTS} />
    </ScrollView>
  );
}

export default BookDetail;
