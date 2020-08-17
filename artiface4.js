import React from 'react';
import {View, Text} from 'react-native';

function App (){
  return(
    <View style={{
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',
      width: 300,
      height: 200,
    }}>
      <Text style={{
        backgroundColor: 'red',
        flex: 0.5,
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
        WoW
      </Text>
      <Text style={{
        backgroundColor:'pink',
        flex: 0.6,
        textAlign:'center',
        fontWeight: 'bold',
      }}>
        HI
      </Text>
    </View>
  )
}
export default App;