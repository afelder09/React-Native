import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase-tools';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeAppe({
      apiKey: 'AIzaSyAHU_L515DV7VbYkVCq6S6VgwF95zn0FME',
      authDomain: 'auth-916d9.firebaseapp.com',
      databaseURL: 'https://auth-916d9.firebaseio.com',
      projectId: 'auth-916d9',
      storageBucket: 'auth-916d9.appspot.com',
      messagingSenderId: '866189907078'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
};

export default App;
