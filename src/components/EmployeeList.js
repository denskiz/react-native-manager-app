import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItem({ item }) {
    return <ListItem employee={item} />;
  }
  render() {
    return (
      <FlatList data={this.props.employees} renderItem={this.renderItem} />
    );
  }
}

const mapStateToProps = state => {
  //Use lodash to convert an object into an array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
    // {shift: 'Monday, name: 'S', id: 'idwaod'}
  });
  return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

//dennis
