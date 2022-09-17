import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { styles } from './stylesheet';

class Scanner extends React.Component{
render(){
    return(
        <View><Text style={styles.title}>Scanner Screen</Text>
        <View style={styles.qrcode}>

        </View>
        <TouchableOpacity
        style={styles.scanBtn}
        onPress={()=>this.props.navigation.pop()}>
          <Text style={styles.qrText}>Click to generate qr</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Result is here: </Text>
        </View>
        
    )
      
}
    
}export default Scanner;

