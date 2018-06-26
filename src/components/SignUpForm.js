import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, Button, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signUpUser } from '../redux/actions';
import { Actions } from 'react-native-router-flux';

class SignUpForm extends Component {
  handleSubmit() {
    let { email, password } = this.props;

    if (email.length > 1 && password.length > 1) {
      this.props.signUpUser({email, password});
    }
  }
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  render(){
    return(
      <View style={styles.Main}>
        <FormLabel>Email</FormLabel>
        <FormInput value={this.props.email}  placeholder="me@email.com" onChangeText={password => {this.props.emailChanged(password)}}/>
        <FormLabel >Password</FormLabel>
        <FormInput value={this.props.password} onChangeText={password => {this.props.passwordChanged(password)}}/>
        <FormValidationMessage> {this.props.error}</FormValidationMessage>
        <Button onPress={this.handleSubmit} color="white" title="Sign Up" buttonStyle={{
          backgroundColor: "#b83b62",
          borderRadius: 5
        }}/>
        <View style={styles.container}>
          <Text>Already have an account? </Text><Button title="Log in" color="#537bf6" onPress={Actions.loginForm} titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderRadius: 5
            }}/>
        </View>
      </View>
    );
  }
};

const styles = {
  Main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, signUpUser})(SignUpForm); 