import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import EmployeeList from './EmployeeList';

const RouterComponent = props => {
    return(
      <Router>
        <Stack key="root" hideNavBar>
          <Stack key="Auth">
            <Scene key="loginForm" title="Log in" component={LogInForm} initial/>
            <Scene key="signupForm" title="Sign Up" component={SignUpForm}/>
          </Stack>
          <Stack key="main">
            <Scene key="employeeList" title="Employees" component={EmployeeList}/>
          </Stack>
        </Stack>
      </Router>
    );
};

export default RouterComponent;