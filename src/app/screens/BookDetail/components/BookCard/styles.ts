import { StyleSheet } from 'react-native';
import { CHARCOAL, WHITE, ATLANTIS, VENETIAN_RED } from '@constants/colors';

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
    color: CHARCOAL,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 25
  },
  availability: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  available: {
    color: ATLANTIS
  },
  notAvailable: {
    color: VENETIAN_RED
  },
  author: {
    color: CHARCOAL,
    fontSize: 15,
    lineHeight: 12,
    paddingTop: 5
  },
  bookImage: {
    height: '100%',
    width: 70
  },
  buttonMargin: {
    marginBottom: 10,
    marginTop: 30
  }
});

export default styles;
