import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
  const [input,setInput]= useState('')
  const [qrValue,setQrValue]= useState('')

  return (
   
    <SafeAreaView>
      <View>
      <Text>Generate qr</Text>
        <QRCode
        value ={qrValue? qrValue:'NA'}
        size ={290}
        color ='white'
        backgroundColor='black'></QRCode>
       <TextInput onChangeText={(text)=>{setInput(text)}}/>
        
        <Button title='generate qr' onPress={(value)=>{setQrValue(input)}}/>

        <Button title='Scan qr' onPress={(value)=>{setQrValue(input)}}/>
         
      </View>
    </SafeAreaView>
  );
};

export default App;
