import React from "react";
import { View, Text, TouchableOpacity, AppRegistry, TextInput, ScrollView } from 'react-native';
import { styles } from './stylesheet';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView } from "react-native-safe-area-context";

class Scanner extends React.Component {
    state = {
        result: '',
        isFlashOn: false
    }
    onSuccess = (e) => {
        this.setState({ result: e.data })
        console.log(e.data)
    };
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View><Text style={styles.title}>Scanner </Text>

                        <QRCodeScanner
                            cameraStyle={styles.qrcode}
                            onRead={this.onSuccess}
                            reactivate={true}
                            reactivateTimeout={10000}
                            flashMode={this.state.isFlashOn ? RNCamera.Constants.FlashMode.torch : null}
                        />
                        <TouchableOpacity
                            style={styles.scanBtn}
                            onPress={() => this.props.navigation.pop()}>
                            <Text style={styles.qrText}>Click to generate qr</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.title}>{this.state.result} </TextInput>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )

    }

}

export default Scanner;

