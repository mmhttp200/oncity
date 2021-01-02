import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Container} from 'reactstrap'
import MainNavbar from '../features/navbar/MainNavbar'
import { logoutSession } from '../features/session/sessionSlice'

export default function Logout(props){

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.removeItem('token')
        dispatch(logoutSession())
    }, [])

    return (
        <Container className="">
            <MainNavbar />
        </Container>
    )
}