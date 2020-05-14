import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { navigationProps } from '@interfaces/navigation';
import BookList from '@components/BookList';
import { ROUTES } from '@constants/routes';

import { BOOKS } from './mockupData';
import styles from './styles';

function Library({ navigation }: navigationProps) {
  const goBookDetail = () => navigation.navigate(ROUTES.BOOK_DETAIL.NAME);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <BookList books={BOOKS} onPress={goBookDetail} />
      </SafeAreaView>
    </>
  );
}

export default Library;
