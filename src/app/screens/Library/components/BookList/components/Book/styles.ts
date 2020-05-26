import { StyleSheet } from 'react-native';
import { CHARCOAL, WHITE } from '@constants/colors';

const styles = StyleSheet.create({
  bookContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1
  },
  decriptionContainer: {
    display: 'flex',
    paddingLeft: 20,
    flex: 1
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CHARCOAL,
    lineHeight: 20
  },
  author: {
    fontSize: 15,
    fontWeight: '300',
    color: CHARCOAL,
    lineHeight: 18,
    paddingTop: 5
  },
  bookImage: {
    height: 60,
    width: 40
  }
});

export default styles;
