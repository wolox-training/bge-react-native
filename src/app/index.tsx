import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import bookImage from './assets/img_book1.png';

import { ALICE_BLUE, CHARCOAL, WHITE } from '../constants/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.bookContainer}>
            <Image
              style={styles.bookImg}
              source={require(bookImage)}
              resizeMode="contain"
            />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: ALICE_BLUE,
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bookContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 2,
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 30,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1
  },
  bookImg: {
    height: 60,
    width: 40
  },
  decriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CHARCOAL,
    lineHeight: 20
  },
  author: {
    fontSize: 15,
    fontWeight: '300',
    color: CHARCOAL,
    lineHeight: 18,
    paddingTop: 5
  }
});

export default App;
