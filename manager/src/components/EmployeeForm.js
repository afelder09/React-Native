import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../action';


class EmployeeForm extends Component {
    onNameChange(value) {
        this.props.employeeUpdate({ prop: 'name', value });
    }

    onPhoneChange(value) {
        this.props.employeeUpdate({ prop: 'phone', value });
    }

    onShiftChange(value) {
        this.props.employeeUpdate({ prop: 'shift', value });
    }

    render() {
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        onChangeText={this.onNameChange.bind(this)}
                        value={this.props.name}/>
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={this.onPhoneChange.bind(this)} />
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
                        onValueChange={this.onShiftChange.bind(this)}
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
            </View>
        );
    }
}

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

const mapStatesToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStatesToProps, { employeeUpdate })(EmployeeForm);