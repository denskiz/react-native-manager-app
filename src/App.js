import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDDbT8KJXgS5JfeV8-fu-gVJGfxYMiW3UE',
      authDomain: 'react-native-manager-8fa7c.firebaseapp.com',
      databaseURL: 'https://react-native-manager-8fa7c.firebaseio.com',
      projectId: 'react-native-manager-8fa7c',
      storageBucket: 'react-native-manager-8fa7c.appspot.com',
      messagingSenderId: '369412776378'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;