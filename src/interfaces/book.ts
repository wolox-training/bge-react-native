export interface Book {
  id: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
  title: string;
  author: string;
  isAvailable: boolean;
}
