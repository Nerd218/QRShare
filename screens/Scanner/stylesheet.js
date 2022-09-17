import { StyleSheet, Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import { COLORS } from '../../colors';


export const styles = StyleSheet.create({

    title: {
        padding: 30,
        alignSelf:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    qrcode:{
        alignSelf:'center',
        borderColor:"blue",
        borderRadius:20,
        borderWidth:1,
        padding:10,
        width:250,
        height:250
    },
    scanBtn:{
        alignSelf:'center',
        backgroundColor:'blue',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:50
    },
    qrText:{
        alignSelf:'center',
        color:'white',
        marginTop:10,
        fontWeight:'bold'

    }
})