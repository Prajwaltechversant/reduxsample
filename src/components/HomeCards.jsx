import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeCards({i}) {
    console.log("item", i.image)
    return ( 
        <View styles={styles.container}>
            <ImageBackground style={styles.card} source={{uri:`${i.image}`}} >
                <View  >
                    <View>
                        <Text style={styles.text}> lorem </Text>
                    </View>
                    {/* <View>
                    <Image style={styles.image} src='' />
                </View> */}
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30

    },
    card: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 180,
        height: 150,
        padding: 5,
    },
    image: {
        width: 152,
        height: 152,

    },
    text: {
        color: 'white',
        fontWeight: '700'
    },
    button: {
        marginTop: 10
        , backgroundColor: "#CEF509",
        padding: 2,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    }
})