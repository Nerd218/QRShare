import React from "react";
import { View,Text } from 'react-native';



class Splash extends React.Component{
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate("Generator")
        },3000)
    }

    render(){
        return(
            <View>
                <Text style={{alignSelf:'center',
        marginTop:300,
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:40}}>QRShare</Text>
            </View>
        )
    }
}export default Splash;