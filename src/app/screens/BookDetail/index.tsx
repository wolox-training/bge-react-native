import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { navigationProps } from '@interfaces/navigation';

function BookDetail({ navigation }: navigationProps) {
  const handleGoBack = () => navigation.goBack();

  return (
    <TouchableHighlight onPress={handleGoBack}>
      <Text>Go Back</Text>
    </TouchableHighlight>
  );
}

export default BookDetail;
