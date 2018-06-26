import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const emailChanged = email => {
  return { type:'email_changed', payload: email }
}
export const passwordChanged = password => {
  return { type:'password_changed', payload: password }
}
const logIn = ({email, password}, dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { // Then an action
        dispatch({ type: 'login_success', payload: user})
      })
      .catch((error) => {
        dispatch({ type: 'auth_fail', payload: error})
      })
}
export const loginUser = ({ email, password }) => {
  return ( dispatch ) => { // Returns a function instead of an action
    logIn({email, password}, dispatch)
    Actions.main()
  }
}
export const signUpUser = ({ email, password }) => {
  return ( dispatch ) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        logIn({email, password}, dispatch)
      })
      .catch((error) => {
        dispatch({ type: 'auth_fail', payload: error.message})
      })
  }
}