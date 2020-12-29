import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Saved from '../screens/Saved';
import User from '../screens/User';

import {
  BottomTabParamList,
  HomeTabParamList,
  SearchTabParamList,
  SavedTabParamList,
  UserTabParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Feather size={20} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </HomeTabStack.Navigator>
  );
}

const SearchTabStack = createStackNavigator<SearchTabParamList>();

function SearchNavigator() {
  return (
    <SearchTabStack.Navigator>
      <SearchTabStack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </SearchTabStack.Navigator>
  );
}

const SavedTabStack = createStackNavigator<SavedTabParamList>();

function SavedNavigator() {
  return (
    <SavedTabStack.Navigator>
      <SavedTabStack.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
    </SavedTabStack.Navigator>
  );
}

const UserTabStack = createStackNavigator<UserTabParamList>();

function UserNavigator() {
  return (
    <UserTabStack.Navigator>
      <UserTabStack.Screen name="User" component={User} options={{ headerShown: false }} />
    </UserTabStack.Navigator>
  );
}
