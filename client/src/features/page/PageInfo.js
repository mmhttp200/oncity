import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPage } from './pageSlice'

export default function PageInfo(props){

    const dispatch = useDispatch()
    const {uri} = useParams()
    const loading = useSelector(state=>state.page.loading)


    useEffect(()=>{

        if(loading == 'idle') dispatch(fetchPage(uri)).then((data)=>console.log(data)).catch()
    })


    return (
        <h1>Page: </h1>
    )

}