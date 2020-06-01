import ImageHeader from '@components/ImageHeader';
import { WHITE, ALICE_BLUE, DEEP_SKY_BLUE, NOVEL } from '@constants/colors';

import { HEADER_HEIGHT } from './dimensions';

export const DEFAULT_NAV_OPTIONS = {
  cardStyle: { backgroundColor: ALICE_BLUE },
  headerBackground: ImageHeader,
  headerTintColor: WHITE,
  headerTitleStyle: { fontWeight: 'bold' },
  headerStyle: { backgroundColor: 'transparent', height: HEADER_HEIGHT, shadowColor: 'transparent' }
} as const;

export const DEFAULT_TAB_OPTIONS = {
  activeTintColor: DEEP_SKY_BLUE,
  inactiveTintColor: NOVEL,
  style: { backgroundColor: WHITE },
  labelStyle: { fontSize: 12 },
  tabStyle: { backgroundColor: WHITE, paddingTop: 5, lineHeight: 12 }
} as const;
