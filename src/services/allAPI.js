import { instance } from "./instance"



export const getAllData = async(url)=>{
    return await instance("GET",url,"","")
}