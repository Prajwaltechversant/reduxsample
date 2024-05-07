import { FlatList, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/slices/dataSlice'
import HomeCards from '../../components/HomeCards'

export default function Home() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    const alldata = useSelector((state) => state.data.allData)
    // console.log(alldata)
    return (
        <View style={styles.container}>
            {/* <View style={styles.headingTextView}>
                <Text style={{ fontSize: 20, color: 'black' }}>Sample Text</Text>
            </View> */}
            <View style={styles.content}>
                {alldata.length > 0 &&
                    <FlatList
                        data={alldata}
                        renderItem={({ item }) => <HomeCards i={item} />}
                        // numColumns={2}
                        
                    />
                }
            </View>
        </View>
    )
}

