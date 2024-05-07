import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { saveItem } from '../redux/slices/saveItemSlice'

export default function HomeCards({ i, style }) {
    // console.log(i.image)

    const dispatch = useDispatch()

    return (
        <View styles={styles.container}>
            <ImageBackground style={styles.card} src={i.image} >
                <View  >
                    <View>
                        <Text style={styles.text}> {i.title}</Text>
                    </View>
                    {/* <View>
                    <Image style={styles.image} src='' />
                </View> */}
                    {!style &&
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => dispatch(saveItem(i))}>
                                <Text style={{ color: 'black' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        paddingTop: 10,

    },
    card: {
        justifyContent: 'flex-end',
        // alignItems: 'center',

        width: 200,
        height: 280,
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
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})