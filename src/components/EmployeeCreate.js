import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, FormInput, FormLabel, Button, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeUpdate, employeeToggleday } from '../redux/actions';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class EmployeeCreate extends Component {
  componentWillReceiveProps() {
    console.log("Recieving props")
  }
  render(){
    return(
      <View style={{flex: 1, display: 'flex'}}>
        <Text h1>Employee Create</Text>
        <FormLabel>Name</FormLabel>
        <FormInput value={this.props.name} onChangeText={(value) => this.props.employeeUpdate({key:'name', value})}/>
        <FormLabel>Phone</FormLabel>
        <FormInput value={this.props.phone} onChangeText={(value) => this.props.employeeUpdate({key:'phone', value})}/>
        <List>
          {
            days.map((day, i) => <Button key={i} onPress={() => this.props.employeeToggleday(day)} title={day} color="white" buttonStyle={this.props.shifts.includes(day) ? {backgroundColor: 'rgba(92, 99,216, 1)'} : {backgroundColor: "grey"}}/>)
          }
        </List>
      </View>
    );
  }
};

const mapStateToProps = state => {
  let {name, phone, shifts} = state.newEmployee;
  return {name, phone, shifts};
}

export default connect(mapStateToProps, {employeeUpdate, employeeToggleday})(EmployeeCreate)