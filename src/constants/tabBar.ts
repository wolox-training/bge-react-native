import { WHITE, DEEP_SKY_BLUE, NOVEL } from '@constants/colors';

export const DEFAULT_TAB_OPTIONS = {
  activeTintColor: DEEP_SKY_BLUE,
  inactiveTintColor: NOVEL,
  style: { backgroundColor: WHITE },
  labelStyle: { fontSize: 12 },
  tabStyle: { backgroundColor: WHITE, paddingTop: 5, lineHeight: 12 }
} as const;
