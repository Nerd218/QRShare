import React from "react";
import { View, Text, Image,StatusBar } from 'react-native';



class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Generator")
        },3000)
    }

    render() {
        return (
            <View>
                <StatusBar barStyle = 'default' hidden = {true} backgroundColor = "#00BCD4" translucent = {false}/>
                <Image
                    style={{ width: "40%", height: "40%", alignSelf: 'center', marginTop: 200 }}
                    source={{ uri: "https://th.bing.com/th/id/R.466dd46469dea9f5f168a6ece2eddda1?rik=XTERb6jfWlwSdw&riu=http%3a%2f%2fwww.zkipster.com%2fwp-content%2fuploads%2f2019%2f08%2fqr-scan.gif&ehk=2hb76tUgZuXE6Wgj6bodWeV1a4S8DHz72XcweaKtGWU%3d&risl=&pid=ImgRaw&r=0" }}
                /><Text style={{
                    alignSelf: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 40
                }}>QRShare</Text>
                <Text style={{
                    marginStart: 160,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 10
                }}>Powered by NerdDev</Text>
            </View>

        )
    }
} export default Splash;