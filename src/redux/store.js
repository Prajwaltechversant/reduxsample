import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './slices/dataSlice'
import saveItemSlice, { saveItem } from './slices/saveItemSlice'


export default configureStore({
    reducer:{
        data:dataSlice,
        saveItem:saveItemSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})