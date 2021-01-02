import { Fragment, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPage } from './pageSlice'

export default function PageInfo(props){

    const dispatch = useDispatch()
    const {uri} = useParams()
    const loading = useSelector(state=>state.page.loading)
    const [success, setSuccess] = useState(true)
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')



    useEffect(()=>{

        if(loading == 'idle') dispatch(fetchPage(uri)).then((data)=>{
            if(data.payload.success){
                setName(data.payload.data.name)
                setAbout(data.payload.data.about)
            }else{
                setSuccess(false)
            }
        }).catch()
    })

if(success){
    return (
        <Fragment>
        <h1>{name}</h1>
        <p>{about}</p>
        </Fragment>
    )
}else{
    return (
        <Fragment>
        <h2>Page not found.</h2>
        </Fragment>
    )
}
    

}