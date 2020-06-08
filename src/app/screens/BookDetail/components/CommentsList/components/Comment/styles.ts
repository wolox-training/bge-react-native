import { StyleSheet } from 'react-native';
import { CHARCOAL } from '@constants/colors';

const PHOTO_SIZE = 40;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  photo: {
    borderRadius: PHOTO_SIZE / 2,
    height: PHOTO_SIZE,
    marginTop: 5,
    width: PHOTO_SIZE
  },
  description: {
    flex: 1,
    marginLeft: 15
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  comment: {
    color: CHARCOAL
  }
});

export default styles;
