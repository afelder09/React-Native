import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView } from 'react-native';
import { employeeFetch } from '../action';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }   

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

        );
    };
};

const mapStatesToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    })

    return {
        employees
    }
}

export default connect(mapStatesToProps, { employeeFetch })(EmployeeList);