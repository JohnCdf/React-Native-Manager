import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Text, FormInput, FormLabel, Button, Divider, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeUpdate, employeeToggleday, employeeCreate, displayMessage } from '../redux/actions';

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
  constructor(props){
    super(props);
    this.state = {message: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit() {
    let {name, phone, shifts} = this.props;

    if (name.length <= 1) {
      return this.props.displayMessage('Please enter a valid name')
    }
    if (phone.length < 10) {
      return this.props.displayMessage('Please enter a valid phone number')
    }
    if (shifts.length < 1) {
      return this.props.displayMessage('Give your employee atleast one shift')
    }

    this.props.employeeCreate({name, phone, shifts})

  }
  render(){
    return(
      <ScrollView style={{flex: 1, display: 'flex'}}>
        <Text h1>Employee Create</Text>
        <FormLabel>Name</FormLabel>
        <FormInput value={this.props.name} onChangeText={(value) => this.props.employeeUpdate({prop:'name', value})}/>
        <FormLabel>Phone</FormLabel>
        <FormInput value={this.props.phone} onChangeText={(value) => this.props.employeeUpdate({prop:'phone', value})}/>
          {
            days.map((day, i) => <Button key={i} onPress={() => this.props.employeeToggleday(day)} title={day} color="white" buttonStyle={this.props.shifts.includes(day) ? {backgroundColor: '#33b3cc', borderRadius: 5} : {backgroundColor: '#bebebe', borderRadius: 5}} />)
          }
        <Divider style={{backgroundColor: '#bebebe', marginLeft: 10, marginRight: 10}} />
        <Button
        title="Add employee"
        onPress={this.handleSubmit}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "#cc3366",
          width: 250,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
        containerStyle={{ marginTop: 20 }}
      />
        <FormValidationMessage>{this.props.message}</FormValidationMessage>
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  let {name, phone, shifts, message} = state.newEmployee;
  return {name, phone, shifts, message};
}

export default connect(mapStateToProps, {employeeUpdate, employeeToggleday, employeeCreate, displayMessage})(EmployeeCreate)