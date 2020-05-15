import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import placeholderBookImg from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  imageUrl: string | null;
  title: string;
  author: string;
  onPress: () => void;
}

function Book({ imageUrl, title, author, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={onPress}>
      <Image
        style={styles.bookImage}
        resizeMode="contain"
        source={imageUrl ? { uri: imageUrl } : placeholderBookImg}
      />
      <View style={styles.decriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
