import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import bookImage from './assets/img_book1.png';

import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.bookContainer}>
            <Image source={bookImage} resizeMode="contain" />
            <View style={styles.decriptionContainer}>
              <Text style={styles.title}>A Little Bird Told Me</Text>
              <Text style={styles.author}>Timothy Cross</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
