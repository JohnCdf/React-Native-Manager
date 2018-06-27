export default (state = {name: '', phone: '', shift: []}, action) =>{
  switch (action.type) {
    case "employee_update":
      let { prop, value } = action.payload;
      return {...state, [prop] : value}; // key interpolation
    break;
    default:
      return state
  }
}