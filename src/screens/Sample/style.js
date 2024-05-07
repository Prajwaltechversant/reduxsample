import {StyleSheet} from 'react-native';



const styles = (screenContext, width, height) =>
  StyleSheet.create(
    {
        container:{
            padding:width*0.1,
            borderColor:'black',
            borderWidth:width*0.1,
            marginTop: height * 0.03,
            backgroundColor : screenContext.windowisPortrait ? 'yellow' :'green',
            justifyContent:'center',
            alignItems:'center'
        },
        image:{
            width:200,
            height:200
        }
    });

export default styles;
