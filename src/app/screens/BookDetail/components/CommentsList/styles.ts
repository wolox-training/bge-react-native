import { StyleSheet } from 'react-native';
import { WHITE } from '@constants/colors';

const styles = StyleSheet.create({
  commentsContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    display: 'flex',
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 15,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1
  },
  viewAll: {
    borderWidth: 0
  }
});

export default styles;
