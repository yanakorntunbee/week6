import React from 'react';
import {View, Text} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state={
        message: 'Apple X',  // initial data
        cat: 'hi',
      }     
  }
  render(){
    return(
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 50,
        }}>
        {this.state.message}
        </Text>
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
        }}>
        {this.state.cat}
        </Text>
      </View>
    )
  }

}
export default App;