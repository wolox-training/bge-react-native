import { Book } from '@interfaces/book';

export type RootStackParamList = {
  Library: undefined;
  BookDetail: { book: Book };
};
