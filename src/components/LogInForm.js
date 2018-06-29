import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, Button, Input} from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../redux/actions';
import { Actions } from 'react-native-router-flux';

class LogInForm extends Component {
  handleSubmit() {
    let { email, password } = this.props;
    
    if (email.length > 1 && password.length > 1) {
      this.props.loginUser({email, password});
    }
  }
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  render(){
    return(
      <View style={styles.Main}>
        <Input value={this.props.email}  placeholder="me@email.com" onChangeText={password => {this.props.emailChanged(password)}} label="Email"/>
        <Input value={this.props.password} placeholder="********" onChangeText={password => {this.props.passwordChanged(password)}} label="Password"/>
        <Text style={{color: 'red'}}> {this.props.message}</Text>
        <Button onPress={this.handleSubmit} loading={this.props.loading} titleStyle={{color: 'white'}} title="Log in" buttonStyle={{
          backgroundColor: "#b83b62",
          borderRadius: 5
        }}/>
        <View style={styles.container}>
          <Text>No account? </Text>
          <Button title="Sign up" titleStyle={{color: "#537bf6", fontWeight: "700" }} onPress={Actions.signupForm}
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
    message: state.auth.message,
    loading: state.auth.loading
  }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LogInForm);