import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { NavigationProps } from '@interfaces/navigation';

function BookDetail({ navigation }: NavigationProps) {
  const handleGoBack = () => navigation.goBack();

  return (
    <TouchableHighlight onPress={handleGoBack}>
      <Text>Go Back</Text>
    </TouchableHighlight>
  );
}

export default BookDetail;
