import firebase from 'firebase';

const INITIAL_STATE = [];

export const fetchEmployees = (state = INITIAL_STATE, action) => {
  return (dispatch) => {
    let { currentUser } = firebase.auth();

    firebase.database().ref('/users/' + currentUser.uid + '/employees')
      .on('value', snapshot => {
        dispatch({type: 'fetch_employees', payload: snapshot.val()})
      });
  }
};