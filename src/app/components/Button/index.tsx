import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  type: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

function Button({ children, type, style }: Props) {
  const textStyle = type === 'secondary' ? styles.primaryText : styles.secondaryText;
  return (
    <TouchableOpacity style={[styles.button, styles[type], style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
