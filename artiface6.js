import React from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';

class App extends React.Component{
    render(){
      return(
        <View style={styles.box}>
          <Text style={styles.iu}>BLΛƆKPIИK</Text>     
          <Image style={styles.bp}
                  source={{
                    uri: 'https://media.giphy.com/media/uWW9mp7jKEpVUyYcAQ/giphy.gif',
                  }}/>  
          <Image style={styles.joy}
          source={ require('./assets/ewqeqwe.png')}/>
                      
        </View>     
      )
    }
}
const styles = StyleSheet.create({
      box:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderWidth:10,
        borderColor:'pink',
        
      },
      iu: {
        fontSize: 50,
        color: 'pink',
        fontWeight: 'bold',
        
      },
      bp:{
        width:300,
        height:200,
      },
      joy:{
        width: 200,
        height: 200,
      },
   
})
export default App;