import { Actions } from "react-native-router-flux";

const INITIAL_STATE = {name: '', phone: '', shifts: []};

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case "employee_update":
      let { prop, value } = action.payload;
      
      return {...state, [prop] : value}; // key interpolation
    break;
    case "employee_toggle_day":
      let oldShifts = [...state.shifts];
      let dayToToggle = action.payload;

      // IF oldShifts contain the day we want to toggle THEN return array that filters it out OTHERWISE return arrary that pushed in
      return oldShifts.includes(dayToToggle) ? {...state, shifts: oldShifts.filter(day => day != dayToToggle)} : {...state, shifts: [...oldShifts, dayToToggle]};
    break;
    case "employee_create":
      Actions.main()
      
      return INITIAL_STATE
    break;
    case "display_message":
      return {...state, message: action.payload}
    break;
    default:
      return state
  }
}