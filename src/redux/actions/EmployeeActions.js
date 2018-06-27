export const employeeUpdate = ({prop, value}) => ({
  type: 'employee_update',
  payload: { prop, value }
});

export const employeeToggleday = (day) =>({
  type: 'employee_toggle_day',
  payload: day
})