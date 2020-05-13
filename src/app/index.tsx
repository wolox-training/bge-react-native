import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BookList from '@components/BookList';

import { BOOKS } from './mockupData';
import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <BookList books={BOOKS} />
      </SafeAreaView>
    </>
  );
};

export default App;
