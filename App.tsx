import React from 'react';
import {View, Text, SafeAreaView, Button,StyleSheet} from 'react-native';

function App() {

  function sayHello() {
    console.log('ammo tikladi');
  }

  const sayHello2 = () =>{
    console.log("ammosello tıkladı")
  }
  return (
    <SafeAreaView style={{backgroundColor: 'cyan'}}>
      <View>
        <Text>Hello</Text>
        <Text>Merhaba</Text>
        <Text>Ahmet </Text>
        <Text>Selalmaz</Text>
      </View>
      <View>
        <Text>asda</Text>
        <Button
          title="Press me"
          onPress={() => {
            sayHello2();
          }}
          disabled={false}
          color={'red'}></Button>
      </View>
    </SafeAreaView>
  );
}

export default App;
