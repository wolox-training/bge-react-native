import { StyleSheet } from 'react-native';
import { DEEP_SKY_BLUE, WHITE } from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: DEEP_SKY_BLUE,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    minWidth: '100%'
  },
  secondary: {
    backgroundColor: DEEP_SKY_BLUE
  },
  text: {
    color: DEEP_SKY_BLUE,
    fontSize: 15,
    fontWeight: 'bold'
  },
  secondaryText: {
    color: WHITE
  }
});

export default styles;
