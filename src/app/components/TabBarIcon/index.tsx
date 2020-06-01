import React from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { TAB_ICONS } from './constants';
import styles from './styles';

interface Props {
  focused: boolean;
}

function TabBarIcon({ focused }: Props) {
  const route = useRoute();
  return <Image style={styles.iconImage} source={TAB_ICONS[route.name][focused ? 'active' : 'inactive']} />;
}

export default TabBarIcon;
