import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/stack';
import { ROUTES } from '@constants/routes';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.LIBRARY.NAME}
          options={{ title: ROUTES.LIBRARY.TITLE }}
          component={Library}
        />
        <Stack.Screen
          name={ROUTES.BOOK_DETAIL.NAME}
          options={{ title: ROUTES.BOOK_DETAIL.TITLE }}
          component={BookDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
