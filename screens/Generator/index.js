import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from './Stylesheet';
import Clipboard from '@react-native-community/clipboard';
class Generator extends React.Component{
  constructor(props) {
    super(props)
  }
  state={
   textinput:"Hello this is text input",
   qrValue:"test",
   qrColor:'blue'
  }
  updateText(text){
    this.setState({textinput:text}) 
  }
  generateQr(){
    this.setState({qrValue:this.state.textinput})
  }
  copyToClipboard = () => {
    Clipboard.setString('hello world');
  };
  changeColor(color){
    this.setState({qrColor: color})
  }
  render(){
    return(
      <SafeAreaView>
      <View>
      <Text style={styles.title}>Generate qr</Text>
        <View style={styles.qrcode}>
        <QRCode
        value ={this.state.qrValue}
        size ={250}
        color ='white'
        backgroundColor={this.state.qrColor}></QRCode>
        </View>
        <View>
        <TextInput 
       style={styles.textBox}
       placeholder='Enter something'
       onChangeText={(textvalues)=>this.setState({textinput:textvalues})} />
        </View>
        <View style={styles.colorView}>
        <TouchableOpacity onPress={()=>this.changeColor('#f15f7d')}>
        {/* <Text>Click</Text> */}
        <View style={styles.colorViewPink}></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.changeColor('#f25fe7')}>
       <View style={styles.colorViewPurple}></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.changeColor('#69f25f')}>
       <View style={styles.colorViewGreen}></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.changeColor('#f2f05f')}>
       <View style={styles.colorViewYellow}></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.changeColor('black')}>
       <View style={styles.colorViewBlack}></View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.changeColor('blue')}>
       <View style={styles.colorViewBlue}></View>
       </TouchableOpacity>
        </View>
       
        <TouchableOpacity
        style={styles.qrbtn}
        onPress={()=>this.generateQr()}>
          <Text style={styles.qrText}>Generate qr</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.scanBtn}
        onPress={()=>this.props.navigation.navigate("Scanner")}>
          <Text style={styles.qrText}>Scan qr</Text>
        </TouchableOpacity>
         
      </View>
    </SafeAreaView>
    );
  }
}export default Generator;



