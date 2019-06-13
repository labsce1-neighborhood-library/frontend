import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShelfScreen from '../screens/ShelfScreen';
import BrowseScreen from '../screens/BrowseScreen';
import MoreScreen from '../screens/MoreScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Scan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `md-qr-scanner`
          : 'md-qr-scanner'
      }
    />
  ),
};

const ShelfStack = createStackNavigator({
  Shelf: ShelfScreen,
});

ShelfStack.navigationOptions = {
  tabBarLabel: 'Shelf',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-bookmark' : 'md-bookmark'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: MoreScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-search' : 'md-search'}
    />
  ),
};

const BrowseStack = createStackNavigator({
  Settings: BrowseScreen,
});

BrowseStack.navigationOptions = {
  tabBarLabel: 'Browse',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-book'}
    />
  ),
};

const MoreStack = createStackNavigator({
  More: MoreScreen,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
    />
  ),
};

const LogIn = createStackNavigator({
  More: MoreScreen,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-history' : 'md-history'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ShelfStack,
  SettingsStack,
  BrowseStack,
  MoreStack,
  LogIn,
});
