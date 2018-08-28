import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Sign In" />
                </Scene>   
                
                <Scene key="main">
                    <Scene 
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeForm()} } 
                        initial/>
                    <Scene
                        key="employeeForm"
                        component={EmployeeForm}
                        title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;