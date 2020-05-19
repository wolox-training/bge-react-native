import React from 'react';
import { Image, StyleSheet } from 'react-native';
import header from '@assets/bc_nav_bar.png';

import styles from './styles';

function ImageHeader() {
  return <Image style={[StyleSheet.absoluteFill, styles.container]} source={header} resizeMode="stretch" />;
}

export default ImageHeader;
