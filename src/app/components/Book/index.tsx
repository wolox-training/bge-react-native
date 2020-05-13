import React from 'react';
import { View, Text, Image } from 'react-native';
import placeholderBookImg from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  imageUrl: string | null;
  title: string;
  author: string;
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={styles.bookContainer}>
      <Image
        style={styles.bookImage}
        resizeMode="contain"
        source={imageUrl ? { uri: imageUrl } : placeholderBookImg}
      />
      <View style={styles.decriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
