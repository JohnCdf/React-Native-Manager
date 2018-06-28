import firebase from 'firebase';

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
    const { currentUser } = firebase.auth();

    firebase.database().ref('users/' + currentUser.uid + '/employees').push({name, phone, shifts})
      .then(res => {
        dispatch({
          type: 'employee_create'
        })
      })
      .catch(err => {
        dispatch({
          type: 'display_message',
          payload: error.message
        })
      })
  }
};

export const displayMessage = (message) => ({
  type: 'display_message',
  payload: message
})