import { useParams } from 'react-router-dom'
import {Container} from 'reactstrap'
import PageInfo from '../features/page/PageInfo'
import MainNavbar from '../features/navbar/MainNavbar'

export default function Page(props){

    const {uri} = useParams()

    return (
        <Container className="">
            <MainNavbar />
            <PageInfo />
        </Container>
    )
}