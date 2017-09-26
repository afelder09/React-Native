// Place code in here for IOS

// Import a library to help us create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View stlye={{ flex: 1 }}>
    <Header headerText={'Albums App'} />
    <AlbumList />
  </View>
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);
