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
        borderRadius:30,
        borderWidth:5,
        padding:50,
        width:250,
        height:200,
        marginTop:50
    },
    scanBtn:{
        alignSelf:'center',
        backgroundColor:'blue',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:150
    },
    qrText:{
        alignSelf:'center',
        color:'white',
        marginTop:10,
        fontWeight:'bold'

    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }
})