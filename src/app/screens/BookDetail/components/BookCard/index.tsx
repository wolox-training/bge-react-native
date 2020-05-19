import React from 'react';
import { View, Text, Image } from 'react-native';
import placeholderBookImg from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  imageUrl: string | null;
  title: string;
  author: string;
  genre: string;
  year: string;
}

function BookCard({ imageUrl, title, author, genre, year }: Props) {
  return (
    <View style={styles.bookCardContainer}>
      <View style={styles.detailContainer}>
        <Image
          style={styles.bookImage}
          resizeMode="contain"
          source={imageUrl ? { uri: imageUrl } : placeholderBookImg}
        />
        <View style={styles.bookDescription}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.available}>Available</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.author}>{year}</Text>
          <Text style={styles.author}>{genre}</Text>
        </View>
      </View>
    </View>
  );
}

export default BookCard;
