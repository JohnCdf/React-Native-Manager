import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class EmployeeList extends Component {
  createDataSource(employees) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    return (<ListItem
      key={employee.uid}
      leftAvatar={{source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}}
      title={employee.name}
      subtitle={employee.phone}
      onPress={() => Actions.employeeEdit({employee})}
    />);
  }
  constructor(props){
    super(props);
    this.state = {};
    this.createDataSource = this.createDataSource.bind(this);
    this.renderRow = this.renderRow.bind(this);
  };

  componentWillMount() {
    this.props.fetchEmployees();
    this.createDataSource(this.props.employees);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.employees);
  }
  render(){
    return(
      <View>
        <Text h1 style={{marginLeft: 10}}>Employees</Text>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
};

const mapStateToProps = state => {
  // Will take our object into an array from firebase
  // { '123' : {...userData}, '321': {...userData} }
  // into
  // [{...userData, uid: '123'}, {...userData, uid: '321}]

  //Key / Value pair -> Array with objects that contain Key as a value (uid)
  employees =  _.map(state.employees, (val, uid) => ({...val, uid}));
  return {employees}
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);