import { StyleSheet } from 'react-native';
import { DEEP_SKY_BLUE, WHITE } from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    height: 44,
    minWidth: '100%'
  },
  primary: {
    backgroundColor: WHITE,
    borderColor: DEEP_SKY_BLUE,
    borderWidth: 1
  },
  secondary: {
    backgroundColor: DEEP_SKY_BLUE
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  primaryText: {
    color: WHITE
  },
  secondaryText: {
    color: DEEP_SKY_BLUE
  }
});

export default styles;
