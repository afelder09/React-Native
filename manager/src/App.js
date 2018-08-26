import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase'
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCFC-0rDD-cKJFdN8lgf8QbvV9tLOJzGpw',
            authDomain: "manager-66ba9.firebaseapp.com",
            databaseURL: "https://manager-66ba9.firebaseio.com",
            projectId: "manager-66ba9",
            storageBucket: "manager-66ba9.appspot.com",
            messagingSenderId: "636345412673"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    };
};

export default App;