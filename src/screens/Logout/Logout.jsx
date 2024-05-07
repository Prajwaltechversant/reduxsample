import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContextAPI } from '../../context/ContextShare'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';
import {useWindowDimensions} from 'react-native';


export default function Logout() {
    const { tokenStatus, setTokenStatus } = useContext(LoginContextAPI)
    const {height, width} = useWindowDimensions();

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setTokenStatus(null)
    }
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <TouchableOpacity onPress={logout} style={{ backgroundColor: 'green', width: 100, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }} >
                    <Text style={{ color: 'white' }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView
                behavior='height'
                contentContainerStyle
                keyboardVerticalOffset={200}
                style={{ padding: 20 }}
            >
                <Text>Label</Text>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <TextInput placeholder='que' style={styles.input} />
                    <Button title='+' />
                </View>
                <Text>Label</Text>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <TextInput placeholder='que' style={styles.input} />
                    <Button title='+' />
                </View>
            </KeyboardAvoidingView>

            <View style={{ backgroundColor: '#dae0e0' }}>
                <Text style={{ color: 'red', fontSize: 20 }}>
                    windowWidth: {width}
                </Text>
                <Text style={{ color: 'red', fontSize: 20 }}>
                    windowHeight: {height}
                </Text>
                {/* <Text style={{ color: 'red', fontSize: 20 }}>
                scale :{scale }
                </Text>
                <Text style={{ color: 'red', fontSize: 20 }}>
                fontScale:{fontScale}
                </Text> */}
            </View>
            </ScrollView>
           

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#a1eff7'
    }

})