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
  const [showAllComments, setShowAllComments] = useState(false);

  const toggleViewAllComments = () => setShowAllComments(!showAllComments);

  return (
    <View style={styles.commentsContainer}>
      {comments.slice(0, showAllComments ? CANT_VIEW_ALL : CANT_TO_SHOW).map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}

      <Button style={styles.viewAll} onPress={toggleViewAllComments}>
        {showAllComments ? 'View Less' : 'View All'}
      </Button>
    </View>
  );
}

export default CommentList;
