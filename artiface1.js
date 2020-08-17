import React from 'react';
import {View,Text} from 'react-native';

const App = () =>{
      return(
        <View style={{
          justifyContent: 'center',
          flex:1,

        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 50 ,
            fontWeight: 'bold',                 
          }}>i LOVE MY CAT</Text>
        </View>
      )

}
export default App;