import React from 'react';
import { FlatList, ListRenderItem, GestureResponderEvent } from 'react-native';
import Book from '@components/Book';

import styles from './styles';

interface Book {
  id: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
  title: string;
  author: string;
}

interface Props {
  books: Book[];
  onPress: (event: GestureResponderEvent) => void;
}

function BookList({ books, onPress }: Props) {
  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <Book imageUrl={item.imageUrl} title={item.title} author={item.author} onPress={onPress} />
  );

  const keyExtractor = ({ id }: Book) => `${id}`;

  return (
    <FlatList<Book> data={books} keyExtractor={keyExtractor} renderItem={renderItem} style={styles.list} />
  );
}

export default BookList;
