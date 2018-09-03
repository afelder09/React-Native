import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
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
                <CardSection style={styles.pickerCardSectionStyle}>
                    <Text
                        style={styles.pickerTextStyle}
                    >
                        Shift
                    </Text>
                    <Picker 
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={day => { employeeFormUpdate({ prop: 'shift', value: day})}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerStyle: {
        flex: 1
    },
    pickerCardSectionStyle: {
        flexkDirection: 'column'
    }
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