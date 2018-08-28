import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { employeeFormUpdate } from '../action';
import { connect } from 'react-redux';


class EmployeeForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        onChangeText={text => { employeeFormUpdate({ prop: 'name', value: text})}}
                        value={this.props.name}/>
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={text => { employeeFormUpdate({ prop: 'phone', value: text})}} />
                </CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, { employeeFormUpdate } )(EmployeeForm);