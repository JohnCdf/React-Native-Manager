import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeesReducer';

export default combineReducers({
  auth: AuthReducer,
  newEmployee: EmployeeFormReducer,
  employees: EmployeesReducer
});