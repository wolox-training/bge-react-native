import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
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
}

function BookList({ books }: Props) {
  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <Book imageUrl={item.imageUrl} title={item.title} author={item.author} />
  );

  const keyExtractor = ({ id }: Book) => `${id}`;

  return (
    <FlatList<Book> data={books} keyExtractor={keyExtractor} renderItem={renderItem} style={styles.list} />
  );
}

export default BookList;
