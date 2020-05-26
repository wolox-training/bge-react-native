import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/stack';
import ROUTES from '@constants/routes';

export type BookDetailRouteType = RouteProp<RootStackParamList, ROUTES.BOOK_DETAIL>;
