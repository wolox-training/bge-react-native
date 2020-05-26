import React from 'react';
import { View, Text, Image } from 'react-native';
import placeholderBookImg from '@assets/img_book6.png';
import Button from '@components/Button';
import { Book } from '@interfaces/book';

import styles from './styles';

function BookCard({ imageUrl, title, author, genre, year, isAvailable }: Book) {
  return (
    <View style={styles.bookCardContainer}>
      <View style={styles.detailContainer}>
        <Image
          style={styles.bookImage}
          resizeMode="contain"
          source={imageUrl ? { uri: imageUrl } : placeholderBookImg}
        />
        <View style={styles.bookDescription}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={[styles.availability, isAvailable && styles.available]}>
            {isAvailable ? 'Available' : 'Not Available'}
          </Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.author}>{year}</Text>
          <Text style={styles.author}>{genre}</Text>
        </View>
      </View>
      <Button style={styles.buttonMargin}>ADD TO WISHLIST</Button>
      <Button secondary>RENT</Button>
    </View>
  );
}

export default BookCard;
