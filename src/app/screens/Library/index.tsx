import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationProps } from '@interfaces/navigation';
import BookList from '@components/BookList';
import { ROUTES } from '@constants/routes';

import { BOOKS } from './mockupData';
import styles from './styles';

function Library({ navigation }: NavigationProps) {
  const goToBookDetail = () => navigation.navigate(ROUTES.BOOK_DETAIL.NAME);

  return (
    <SafeAreaView style={styles.container}>
      <BookList books={BOOKS} onPress={goToBookDetail} />
    </SafeAreaView>
  );
}

export default Library;
