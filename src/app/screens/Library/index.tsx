import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationProps } from '@interfaces/navigation';
import { Book } from '@interfaces/book';
import ROUTES from '@constants/routes';

import BookList from './components/BookList';
import { BOOKS } from './mockupData';
import styles from './styles';

function Library({ navigation }: NavigationProps) {
  const goToBookDetail = (book: Book) => () => navigation.navigate(ROUTES.BOOK_DETAIL, { book });

  return (
    <SafeAreaView style={styles.container}>
      <BookList books={BOOKS} onPress={goToBookDetail} />
    </SafeAreaView>
  );
}

export default Library;
