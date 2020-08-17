import React, {Component}from 'react';
import {View,StyleSheet,Image} from 'react-native';

class App extends Component{
    render(){
      return(
        <View style={styles.iucontainer}>
        
          <View style={[styles.box,styles.box]}/>
          <Image style={[styles.box,styles.box]}
                  source={{
                    uri: 'https://media.giphy.com/media/8P1mvZMSHVNbkozRly/giphy.gif',
                  }}/>
               
          <View style={[styles.box,styles.box2]} />
          <Image style={[styles.box,styles.box2]}
                  source={{
                    uri: 'https://media.giphy.com/media/uWW9mp7jKEpVUyYcAQ/giphy.gif',
                  }}/> 


          <View style={[styles.box,styles.box3]}/>
          <Image style={[styles.box,styles.box3]}
                  source={{
                    uri: 'https://media.giphy.com/media/5Y9CS4McQxwqQNI4wV/giphy.gif',
                  }}/>       
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
      backgroundColor:'pink',
      borderColor:'pink',
      borderRadius:35,
      borderColor:'black',
    },
    box2:{
      flex:2,
      backgroundColor:'yellow',
      borderColor:'pink',
      borderRadius:35,
      borderColor:'black',
    },
    box3:{
      flex:3,
      backgroundColor:'red',
      borderColor:'black',
      borderRadius:35,
      borderColor:'black',
    },

})
export default App;













