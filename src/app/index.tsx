import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@interfaces/stack';
import ROUTES, { ROUTES_TITLE } from '@constants/routes';
import { DEFAULT_NAV_OPTIONS } from '@constants/navigation';
import { DEFAULT_TAB_OPTIONS } from '@constants/tabBar';
import TabBarIcon from '@components/TabBarIcon';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import WishList from './screens/WishList';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function LibraryStack() {
  return (
    <Stack.Navigator screenOptions={DEFAULT_NAV_OPTIONS}>
      <Stack.Screen name={ROUTES.LIBRARY} options={{ title: ROUTES_TITLE.LIBRARY }} component={Library} />
      <Stack.Screen
        name={ROUTES.BOOK_DETAIL}
        options={{ title: ROUTES_TITLE.BOOK_DETAIL }}
        component={BookDetail}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator screenOptions={{ tabBarIcon: TabBarIcon }} tabBarOptions={DEFAULT_TAB_OPTIONS}>
        <Tab.Screen name={ROUTES.LIBRARY} component={LibraryStack} />
        <Tab.Screen name={ROUTES.WISH_LIST} component={WishList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
