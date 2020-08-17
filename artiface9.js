import React, {Component}from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';

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
const {height,width}=Dimensions.get('window');
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
      width:width*1,
      height:height*(1/3),
      backgroundColor:'skyblue',
      borderColor:'red',
    },
    box2:{
      top: '33.33',
      width: '100%',
      height: '33.33%',
      backgroundColor:'yellow',
      borderColor:'pink',
    },
    box3:{
      width:'100%',
      height:height*(1/3),
      top: '33.33',
      backgroundColor:'red',
      borderColor:'black',
    }

})
export default App;













