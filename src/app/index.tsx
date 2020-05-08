import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native';

import Book from './components/Book';

import { BOOKS } from './mockupData';

import { ALICE_BLUE } from '../constants/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={BOOKS}
          renderItem={({ item }) => (
            <Book
              url={item.image_url}
              title={item.title}
              author={item.author}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ALICE_BLUE,
    flex: 1,
    paddingTop: 10
  }
});

export default App;
