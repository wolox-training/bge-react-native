import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
}

function Button({ children, secondary, style }: Props) {
  return (
    <TouchableOpacity style={[styles.button, secondary && styles.secondary, style]}>
      <Text style={[styles.text, secondary && styles.secondaryText]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
