import ImageHeader from '@components/ImageHeader';
import { WHITE, ALICE_BLUE } from '@constants/colors';

import { HEADER_HEIGHT } from './dimensions';

export const DEFAULT_NAV_OPTIONS = {
  cardStyle: { backgroundColor: ALICE_BLUE },
  headerBackground: ImageHeader,
  headerTintColor: WHITE,
  headerTitleStyle: { fontWeight: 'bold' },
  headerStyle: { backgroundColor: 'transparent', height: HEADER_HEIGHT, shadowColor: 'transparent' }
} as const;
