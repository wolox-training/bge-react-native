import ImageHeader from '@components/ImageHeader';
import { WHITE } from '@constants/colors';

import { HEADER_HEIGHT } from './dimensions';

export const DEFAULT_NAV_OPTIONS = {
  headerBackground: ImageHeader,
  headerTintColor: WHITE,
  headerTitleStyle: { fontWeight: 'bold' },
  headerStyle: { backgroundColor: 'transparent', height: HEADER_HEIGHT, shadowColor: 'transparent' }
} as const;
