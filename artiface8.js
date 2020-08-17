import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';

class App extends React.Component{
    render(){
      return(
        <View style={styles.view}>
        <Text style={styles.kpop}>BLΛƆKPIИK</Text>
        <View style={styles.top}/>
        <View style={styles.middle}/>
        <View style={styles.bottom}/>
        <Image
        style={styles.iu}
            source ={{
              uri:'https://media.giphy.com/media/uWW9mp7jKEpVUyYcAQ/giphy.gif',
            }}
        />
           
        </View> 
      )
      
    }
}
const styles = StyleSheet.create({
    iu:{      
      height:250,
      width: 450,
    },
    kpop:{
      textAlign:'center',
      fontSize:50,
      fontWeight:'bold',
      backgroundColor:'black',
      color:'pink',
    },
    view:{
      flex:1,
      justifyContent:'space-between',
   
    },
    top:{
      flex:0.3,
      backgroundColor:'red',
      borderWidth:20,
      borderTopLeftRadius:90,
      borderBottomLeftRadius:90,
      
    },
    bottom:{
      flex:0.3,
      backgroundColor:'pink',
      borderWidth:20,
      borderBottomLeftRadius:90,
      borderTopLeftRadius:90,
    },
    middle:{
      flex:0.3,
      backgroundColor:'skyblue',
      borderWidth:20,
      borderBottomLeftRadius:90,
      borderTopLeftRadius:90,
    }
})
export default App;
