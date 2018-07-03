import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import { Text, Input, Button, Divider, Overlay } from 'react-native-elements';
import Communications from 'react-native-communications';

import firebase from 'firebase';

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
    this.state = {name: '', phone: '', shifts: [], message: '', loading: false, isVisible: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  employeeToggleday(dayToToggle) {
    let shifts = this.state.shifts;

    shifts.includes(dayToToggle) ? this.setState({shifts: shifts.filter(day => day != dayToToggle)}) : this.setState({shifts: [...shifts, dayToToggle]});
  }
  deleteUser() {
    let { currentUser } = firebase.auth();
    firebase.database().ref('users/' + currentUser.uid + '/employees/' + this.props.employee.uid).remove()
    .then(res => {
      Actions.employeeList()
    })
    .catch(err => {
      this.setState({message: err.message, isVisible: false})
    })
  }
  handleSubmit() {
    let {name, phone, shifts} = this.state;
    this.setState({loading: true});

    if (name.length <= 1) {this.setState({loading: false})
      return this.setState({message: 'Name is too short. Please choose a longer one'})
    }
    if (phone.length < 10) {this.setState({loading: false})
      return this.setState({message: 'Phone number must be atleast 10 digits long'})
    }

    let { currentUser } = firebase.auth();
    firebase.database().ref('users/' + currentUser.uid + '/employees/' + this.props.employee.uid).set({
      name,
      phone,
      shifts
    })
    .then(res => {
      this.setState({message: 'Saved changed', loading: false})
    })
    .catch(err => {
      this.setState({message: err.message, loading: false})
    })
  }
  componentDidMount() {
    this.setState({...this.props.employee});
    this.employeeToggleday = this.employeeToggleday.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  render(){
    return(
      this.state.isVisible ? <Overlay isVisible={this.state.isVisible} onBackdropPress={() => this.setState({isVisible: false})}>
          <Text>Are you sure you want to delete this employee?</Text>
          <Button title="Yes" onPress={this.deleteUser}/>
          <Button title="Cancel" onPress={() => this.setState({isVisible: false})}/>
      </Overlay>
      :
      <ScrollView style={{flex: 1, display: 'flex'}}>
        <Text h1>Edit employee</Text>
        <Input value={this.state.name} onChangeText={(name) => this.setState({name})} label="Name"/>
        <Input value={this.state.phone} onChangeText={(phone) => this.setState({phone})} label="Phone"/>
          {
            days.map((day, i) => <Button key={i} onPress={() => this.employeeToggleday(day)} title={day} color="white" buttonStyle={this.state.shifts.includes(day) ? {backgroundColor: '#33b3cc', borderRadius: 5} : {backgroundColor: '#bebebe', borderRadius: 5}} />)
          }
        <Divider style={{backgroundColor: '#bebebe', marginLeft: 10, marginRight: 10}} />
        <Button
          title="Send message"
          onPress={() => Communications.text(this.state.phone)}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#6eda44",
            width: 250,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
        <Button
          title="Save changes"
          onPress={this.handleSubmit}
          loading={this.state.loading}
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
        <Button
          title="Delete employee"
          onPress={() => this.setState({isVisible: true})}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "red",
            width: 250,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
        <Text style={{color: 'red'}}>{this.state.message}</Text>
      </ScrollView>
    );
  }
};

export default EmployeeCreate;