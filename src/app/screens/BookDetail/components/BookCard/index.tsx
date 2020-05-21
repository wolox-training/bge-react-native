import React from 'react';
import { View, Text, Image } from 'react-native';
import placeholderBookImg from '@assets/img_book6.png';
import Button from '@components/Button';

import styles from './styles';

interface Props {
  imageUrl: string | null;
  title: string;
  author: string;
  genre: string;
  year: string;
  isAvailable: boolean;
}

function BookCard({ imageUrl, title, author, genre, year, isAvailable }: Props) {
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
          <Text style={[styles.availability, isAvailable ? styles.available : styles.notAvailable]}>
            {isAvailable ? 'Available' : 'Not Available'}
          </Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.author}>{year}</Text>
          <Text style={styles.author}>{genre}</Text>
        </View>
      </View>
      <Button type="primary" style={styles.buttonMargin}>
        ADD TO WISHLIST
      </Button>
      <Button type="secondary">RENT</Button>
    </View>
  );
}

export default BookCard;
