import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

const RouterComponent = props => {
    return(
      <Router>
        <Stack key="root" hideNavBar>
          <Stack key="Auth">
            <Scene key="loginForm" title="Log in" component={LogInForm} initial/>
            <Scene headerBackTitle={false} key="signupForm" title="Sign Up" component={SignUpForm}/>
          </Stack>
          <Stack key="main">
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
          </Stack>
        </Stack>
      </Router>
    );
};

export default RouterComponent;