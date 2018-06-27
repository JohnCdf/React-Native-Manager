import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const emailChanged = email => {
  return { type:'email_changed', payload: email }
}
export const passwordChanged = password => {
  return { type:'password_changed', payload: password }
};
const logInFn = ({email, password}, dispatch) => {
  dispatch({type: 'set_loading', payload: true})
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { // Then an action
        dispatch({ type: 'login_success', payload: user});
        dispatch({type: 'set_loading', payload: false})
        Actions.main();
      })
      .catch((error) => {
        dispatch({type: 'set_loading', payload: false})
        dispatch({ type: 'display_message', payload: error.message});
      })
};
export const loginUser = ({ email, password }) => {
  return ( dispatch ) => { // Returns a function instead of an action
    logInFn({email, password}, dispatch);
  }
};
export const signUpUser = ({ email, password }) => {
  return ( dispatch ) => {
    dispatch({type: 'set_loading', payload: true})

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({type: 'display_message', payload: 'Created user, signing in...'});
        logInFn({email, password}, dispatch);
      })
      .catch((error) => {
        console.log(error.message)
        dispatch({type: 'set_loading', payload: false})
        dispatch({ type: 'display_message', payload: error.message});
      })
  }
}