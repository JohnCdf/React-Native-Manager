export default (state = {email: ''}, action) => {
  switch(action.type){
    case "email_changed":
      return {...state, email: action.payload}
    break;
    case "password_changed":
      return {...state, password: action.payload}
    break;
    case "login_success":
      return {...state, user: action.payload, error: ''}
    break;
    case "auth_fail":
      return {...state, error: action.payload, password: ''}
    break;
    default:
      return state
  }
}