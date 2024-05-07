import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../context/ScreenContext.js/ScreenContextProvider'
import styles from './style'
export default function Sample() {

    // context

    const screenContext = useScreenContext()

    // passing  contextdata  to stylesheet
    const screenStyles = styles(
        screenContext,
        screenContext[screenContext.isPortrait ? 'windowWidth' : 'windowHeight'],
        screenContext[screenContext.isPortrait ? 'windowHeight' : 'windowWidth'],)
    console.log(screenContext)
    return (
        <View style={screenStyles.container} >
            <Image src='https://th.bing.com/th/id/OIP.vNw_hcxUnxGNxCk00eO6rQHaE8?rs=1&pid=ImgDetMain' style={screenStyles.image} />      
            
             </View>
    )
}