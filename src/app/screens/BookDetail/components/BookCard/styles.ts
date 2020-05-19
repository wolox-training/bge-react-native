import { StyleSheet } from 'react-native';
import { CHARCOAL, WHITE, ATLANTIS } from '@constants/colors';

const styles = StyleSheet.create({
  bookCardContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    display: 'flex',
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1
  },
  detailContainer: {
    flexDirection: 'row'
  },
  bookDescription: {
    flex: 1,
    marginLeft: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CHARCOAL,
    lineHeight: 25
  },
  available: {
    fontSize: 17,
    color: ATLANTIS,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 15,
    color: CHARCOAL,
    paddingTop: 5,
    lineHeight: 10
  },
  bookImage: {
    height: '100%',
    minWidth: 70,
    maxWidth: 100
  }
});

export default styles;
