import { FlatList, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import HomeCards from '../../components/HomeCards'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/slices/dataSlice'

export default function Home() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    const alldata = useSelector((state) => state.data.allData.data)
    return (
        <View>
            <View style={styles.headingTextView}>
                <Text style={{ fontSize: 20, color: 'black' }}>Sample Text</Text>
            </View>
            <FlatList
                data={alldata}
                renderItem={({ item }) => <HomeCards i={item} />}
            />
            <HomeCards />

        </View>
    )
}

