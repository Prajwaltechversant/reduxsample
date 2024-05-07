import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeCards from '../../components/HomeCards'

export default function Data() {

  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch()
  // },[])

  const savedItems = useSelector((state) => state.saveItem)
  console.log(savedItems)

  return (
    <View>
      <Text>Data</Text>
      <View>

        <FlatList
          data={savedItems}
          renderItem={({ item }) => <HomeCards i={item} style={true} />}
          numColumns={2}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})