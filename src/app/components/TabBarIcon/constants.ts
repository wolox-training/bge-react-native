import { ImageSourcePropType } from 'react-native';
import ROUTES from '@constants/routes';
import libraryActiveIcon from '@assets/ic_library_active.png';
import libraryDisableIcon from '@assets/ic_library.png';
import wishListActiveIcon from '@assets/ic_wishlist_active.png';
import wishListIcon from '@assets/ic_wishlist.png';

interface TabIcon {
  active: ImageSourcePropType;
  inactive: ImageSourcePropType;
}

interface TabIcons {
  [key: string]: TabIcon;
}

export const TAB_ICONS: TabIcons = {
  [ROUTES.LIBRARY]: {
    active: libraryActiveIcon,
    inactive: libraryDisableIcon
  },
  [ROUTES.WISH_LIST]: {
    active: wishListActiveIcon,
    inactive: wishListIcon
  }
};
