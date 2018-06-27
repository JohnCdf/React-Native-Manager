export default (state = {name: '', phone: '', shifts: []}, action) =>{
  switch (action.type) {
    case "employee_update":
      let { prop, value } = action.payload;
      console.log('sending...')
      return {...state, [prop] : value}; // key interpolation
    break;
    case "employee_toggle_day":
      let oldShifts = state.shifts;
      let dayToToggle = action.payload;

      // IF oldShifts contain the day we want to toggle THEN return array that filters it out OTHERWISE return arrary that pushed in
      return oldShifts.includes(dayToToggle) ? {...state, shifts: oldShifts.filter(day => day != dayToToggle)} : {...state, shifts: [...oldShifts, dayToToggle]};
    break;
    default:
      return state
  }
}