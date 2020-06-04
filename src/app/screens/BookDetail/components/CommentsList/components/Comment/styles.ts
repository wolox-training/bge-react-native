import { StyleSheet } from 'react-native';
import { CHARCOAL } from '@constants/colors';

const styles = StyleSheet.create({
  commentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20
  },
  photo: {
    borderRadius: 40,
    height: 40,
    marginTop: 5,
    width: 40
  },
  description: {
    display: 'flex',
    flex: 1,
    paddingLeft: 15
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
