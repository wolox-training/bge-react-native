import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface Props {
  uri: string | null;
  title: string;
  author: string;
}

const Book = ({ uri, title, author }: Props) => {
  return (
    <>
      {uri && (
        <View style={styles.bookContainer}>
          <Image style={styles.bookImage} resizeMode="contain" source={{ uri }} />
          <View style={styles.decriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Book;
