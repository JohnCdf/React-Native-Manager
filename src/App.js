import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import firebase from 'firebase';
import Router from './components/Router';
import { firebaseConfig } from './firebaseConfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
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