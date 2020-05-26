import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Book as BookProps } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

interface Props {
  books: BookProps[];
  onPress: (book: BookProps) => () => void;
}

function BookList({ books, onPress }: Props) {
  const renderItem: ListRenderItem<BookProps> = ({ item }) => (
    <Book imageUrl={item.imageUrl} title={item.title} author={item.author} onPress={onPress(item)} />
  );

  const keyExtractor = ({ id }: BookProps) => `${id}`;

  return (
    <FlatList<BookProps>
      data={books}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
    />
  );
}

export default BookList;
