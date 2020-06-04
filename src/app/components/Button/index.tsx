import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function Button({ children, secondary, style, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.button, secondary && styles.secondary, style]} onPress={onPress}>
      <Text style={[styles.text, secondary && styles.secondaryText]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
