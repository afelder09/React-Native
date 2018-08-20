import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAMK4gCS0zfKaWpSTjHkBCJ9335FBh-2SQ",
            authDomain: "auth2-f9b5e.firebaseapp.com",
            databaseURL: "https://auth2-f9b5e.firebaseio.com",
            projectId: "auth2-f9b5e",
            storageBucket: "auth2-f9b5e.appspot.com",
            messagingSenderId: "312184100318"
          });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderBody() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return(
            <View>
                <Header headerText={'Auth App'} />
                {this.renderBody()}
            </View>
        )
    }
}

export default App;