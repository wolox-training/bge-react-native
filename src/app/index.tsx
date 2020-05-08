import React from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';

import Book from './components/Book';

import { BOOKS } from './mockupData';
import styles from './styles';

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

export default App;
