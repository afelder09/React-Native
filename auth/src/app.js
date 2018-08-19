import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAMK4gCS0zfKaWpSTjHkBCJ9335FBh-2SQ",
            authDomain: "auth2-f9b5e.firebaseapp.com",
            databaseURL: "https://auth2-f9b5e.firebaseio.com",
            projectId: "auth2-f9b5e",
            storageBucket: "auth2-f9b5e.appspot.com",
            messagingSenderId: "312184100318"
          });
    }

    render() {
        return(
            <View>
                <Header headerText={'Auth App'} />
                <LoginForm />
            </View>
        )
    }
}

export default App;