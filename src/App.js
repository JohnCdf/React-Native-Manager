import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import firebase from 'firebase';
import Router from './components/Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDUOijhuhPrbI6-Pwql2OZMT-zsQyq-Ar8",
      authDomain: "usurvey-d3a7d.firebaseapp.com",
      databaseURL: "https://usurvey-d3a7d.firebaseio.com",
      projectId: "usurvey-d3a7d",
      storageBucket: "usurvey-d3a7d.appspot.com",
      messagingSenderId: "398416825201"
    };
    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <Router />
      </Provider>
    );
  }
};

const styles = {
  Main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}
export default App;