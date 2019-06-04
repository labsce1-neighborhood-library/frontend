import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShelfScreen from '../screens/ShelfScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
  Settings: SettingsScreen,
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
  Settings: SettingsScreen,
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
  Settings: SettingsScreen,
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

export default createBottomTabNavigator({
  HomeStack,
  ShelfStack,
  SettingsStack,
  BrowseStack,
  MoreStack
});
