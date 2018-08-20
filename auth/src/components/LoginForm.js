import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component{
    state = { 
        password: '',
        email: '',
        loading: false,
        error: ''
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( this.onLoginSuccess.bind(this) )
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then( this.onLoginSuccess.bind(this))
                    .catch( this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false});
    }

    renderButton() {
        if(this.state.loading){
            return <Spinner size="small"/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {

        return(<Card>
            <CardSection>
                <Input
                    label={'Email'}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='user@gmail.com'
                />
            </CardSection>
            <CardSection>
                <Input
                    label={'Password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='password'
                    secureTextEntry
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
    )};
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;