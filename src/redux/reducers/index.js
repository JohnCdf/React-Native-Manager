import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  newEmployee: EmployeeFormReducer
});