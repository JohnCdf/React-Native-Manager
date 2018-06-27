import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, FormInput, FormLabel } from 'react-native-elements';

class EmployeeCreate extends Component {
  render(){
    return(
      <View style={{flex: 1, display: 'flex'}}>
        <Text h1>Employee Create</Text>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormLabel>Phone</FormLabel>
        <FormInput />
      </View>
    );
  }
};

export default EmployeeCreate