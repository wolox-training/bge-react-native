import { StyleSheet } from 'react-native';

import { ALICE_BLUE, CHARCOAL, WHITE } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ALICE_BLUE,
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bookContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 2,
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 30,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1
  },
  decriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20
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
  }
});

export default styles;
