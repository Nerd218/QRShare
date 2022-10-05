import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../responsive';
const windowWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({

    
    title: {
        padding: 30,
        alignSelf:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    container:{
      
    
    },
    qrcode:{
        alignSelf:'center',
        borderColor:"black",
        borderRadius:20,
        borderWidth:.5,
        padding:10,
    },
    qrbtn:{
        alignSelf:'center',
        backgroundColor:'cyan',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:40,
        elevation:3
    },
    qrText:{
        alignSelf:'center',
        color:'white',
        marginTop:10,
        fontWeight:'bold',
       

    },
    scanBtn:{
        alignSelf:'center',
        backgroundColor:'cyan',
        width:250,
        height:40,
        borderRadius:10,
        marginTop:10,
        elevation:3
    },
    textBox:{
        margin: 20,
        padding:20,
        borderRadius:10,
        borderWidth:.5,
        borderColor:'black',
        color:'black',
        
        
    },
    colorViewPink:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f15f7d',
        elevation:5
    },
    colorViewPurple:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f25fe7',
        elevation:5
    },
    colorViewGreen:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#69f25f',
        elevation:5
    },
     colorViewYellow:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'#f2f05f',
        elevation:5
    },
    colorViewBlue:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'blue',
        elevation:5
    },
    colorViewBlack:{
        borderRadius:20,
        height:20,
        width:20,
        borderWidth:1,
        backgroundColor:'black',
        elevation:5
    },
    colorView:{
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    helpBtn:{
        height:30,
        width:30,
        marginTop:5,
        alignSelf:'flex-end',
        borderColor:'black',
        borderWidth:1,
        margin:20,
        borderRadius:20,
        alignItems:'center',
        padding:5,
        elevation:5,
        backgroundColor:'yellow'
      },
      helpText:{
        fontSize:14,
        fontWeight:'bold'
      }
      
    

})