import React, {Component}from 'react';
import {View,StyleSheet} from 'react-native';

class App extends Component{
    render(){
      return(
        <View style={styles.iucontainer}>
          <View style={styles.box,styles.box1}/>
          <View style={styles.box,styles.box2} />
          <View style={styles.box,styles.box3}/>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    iucontainer:{
      flex:1,
    },
    box:{
      flex:1,
      borderWidth:2,
      borderRadius:20,
    },
    box1:{
      flex:1,
      backgroundColor:'skyblue',
      borderColor:'red',
    },
    box2:{
      flex:1,
      backgroundColor:'yellow',
      borderColor:'pink',
    },
    box3:{
      flex:1,
      backgroundColor:'red',
      borderColor:'black',
    }

})
export default App;













