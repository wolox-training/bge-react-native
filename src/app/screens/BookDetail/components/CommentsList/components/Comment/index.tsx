import React from 'react';
import { Image, Text, View } from 'react-native';
import { Comment as CommentProps } from '@interfaces/comment';
import placeholderAvatarImg from '@assets/img_book6.png';

import styles from './styles';

function Comment({ imageUrl, name, comment }: CommentProps) {
  return (
    <View style={styles.commentContainer}>
      <Image style={styles.photo} resizeMode="cover" source={imageUrl ? imageUrl : placeholderAvatarImg} />
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}

export default Comment;
