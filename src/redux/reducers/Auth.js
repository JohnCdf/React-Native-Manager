export default (state = {email: '', password: '', loading: false, message: ''}, action) => {
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
    case "display_message":
      return {...state, message: action.payload}
    break;
    case "set_loading":
      return {...state, loading: action.payload}
    default:
      return state
  }
}