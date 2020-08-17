import React from 'react';
import {View, Text , StyleSheet} from 'react-native';

function App (){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>WoW</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 200,
    height: 300,
    backgroundColor: 'orange',
    borderWidth: 20,
    borderColor: 'yellow',
    borderRadius:90,
  }

})
export default App;