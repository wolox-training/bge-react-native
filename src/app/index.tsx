import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/stack';
import ROUTES, { ROUTES_TITLE } from '@constants/routes';
import { DEFAULT_NAV_OPTIONS } from '@constants/navigation';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={DEFAULT_NAV_OPTIONS}>
        <Stack.Screen name={ROUTES.LIBRARY} options={{ title: ROUTES_TITLE.LIBRARY }} component={Library} />
        <Stack.Screen
          name={ROUTES.BOOK_DETAIL}
          options={{ title: ROUTES_TITLE.BOOK_DETAIL }}
          component={BookDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
