import React, { useState } from 'react';
import { View } from 'react-native';
import { Comment as CommentProps } from '@interfaces/comment';
import Button from '@components/Button';

import Comment from './components/Comment';
import styles from './styles';
import { CANT_TO_SHOW, CANT_VIEW_ALL } from './constants';

interface Props {
  comments: CommentProps[];
}

function CommentList({ comments }: Props) {
  const [commentsToShow, setCommentToShow] = useState(comments.slice(0, CANT_TO_SHOW));
  const [isPressed, setIsPressed] = useState(false);

  const handleViewAll = () => {
    setCommentToShow(comments.slice(0, CANT_VIEW_ALL));
    setIsPressed(true);
  };

  return (
    <View style={styles.commentsContainer}>
      {commentsToShow.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      {!isPressed && (
        <Button style={styles.viewAll} onPress={handleViewAll}>
          View All
        </Button>
      )}
    </View>
  );
}

export default CommentList;
