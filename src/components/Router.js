import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = props => {
    return(
      <Router>
        <Stack key="root" hideNavBar>
          <Stack key="Auth">
            <Scene key="loginForm" title="Log in" component={LogInForm} initial/>
            <Scene key="signupForm" title="Sign Up" component={SignUpForm}/>
          </Stack>
          <Stack key="main" renderBackButton={()=>(null)}>
            <Scene 
              initial
              rightTitle="Add"
              onRight={() => {Actions.employeeCreate()}}
              key="employeeList" 
              title="Employees" 
              component={EmployeeList}/>
              
            <Scene
              key="employeeCreate"
              title="Add an employee"
              component={EmployeeCreate}/>
            <Scene
              key="employeeEdit"
              title="Edit employee information"
              component={EmployeeEdit}/>
          </Stack>
        </Stack>
      </Router>
    );
};

export default RouterComponent;