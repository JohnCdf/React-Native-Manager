import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => ({
  type: 'employee_update',
  payload: { prop, value }
});

export const employeeToggleday = (day) => ({
  type: 'employee_toggle_day',
  payload: day
});

export const employeeCreate = ({name, phone, shifts}) => {
  return (dispatch) => {
    dispatch({type: 'set_loading', payload: true});

    const { currentUser } = firebase.auth();

    firebase.database().ref('users/' + currentUser.uid + '/employees').push({name, phone, shifts})
      .then(res => {
        dispatch({type: 'employee_create'});
        dispatch({type: 'set_loading', payload: false});
        Actions.pop();
      })
      .catch(err => {
        dispatch({type: 'display_message', payload: error.message});
        dispatch({type: 'set_loading', payload: false});
      });
  }
};

export const displayMessage = (message) => ({
  type: 'display_message',
  payload: message
})