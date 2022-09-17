import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../responsive';
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
        padding:10
    },
    qrbtn:{
        alignSelf:'center',
        backgroundColor:'blue',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:40
    },
    qrText:{
        alignSelf:'center',
        color:'white',
        marginTop:10,
        fontWeight:'bold'

    },
    scanBtn:{
        alignSelf:'center',
        backgroundColor:'blue',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:10
    },
    textBox:{
        margin: 20,
        padding:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'blue'
    },
    colorViewPink:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f15f7d'
    },
    colorViewPurple:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f25fe7'
    },
    colorViewGreen:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#69f25f'
    },
     colorViewYellow:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f2f05f'
    },
    colorViewBlue:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'blue'
    },
    colorViewBlack:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'black'
    },
    colorView:{
        justifyContent:'space-evenly',
        flexDirection:'row'
    }
    

})