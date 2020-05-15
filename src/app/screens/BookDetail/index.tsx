import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationProps } from '@interfaces/navigation';

function BookDetail({ navigation }: NavigationProps) {
  const handleGoBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  );
}

export default BookDetail;
