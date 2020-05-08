import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { CHARCOAL } from '../../../constants/colors';

interface Props {
  url: string | null;
  title: string;
  author: string;
}

const Book = ({ url, title, author }: Props) => {
  return (
    <>
      {url && (
        <View style={styles.bookContainer}>
          <Image
            style={styles.bookImg}
            source={{
              uri: url
            }}
          />
          <View style={styles.decriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingLeft: 30,
    paddingVertical: 15,
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

export default Book;
