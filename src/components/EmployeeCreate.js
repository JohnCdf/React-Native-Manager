import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeUpdate } from '../redux/actions';

class EmployeeCreate extends Component {
  render(){
    return(
      <View style={{flex: 1, display: 'flex'}}>
        <Text h1>Employee Create</Text>
        <FormLabel>Name</FormLabel>
        <FormInput value={this.props.name} onChangeText={(value) => this.props.employeeUpdate({key:'name', value})}/>
        <FormLabel>Phone</FormLabel>
        <FormInput value={this.props.phone} onChangeText={(value) => this.props.employeeUpdate({key:'phone', value})}/>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  name: state.newEmployee.name,
  phone: state.newEmployee.phone,
  shift: state.newEmployee.shift
})

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)