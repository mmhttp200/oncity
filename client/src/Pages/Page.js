import { useParams } from 'react-router-dom'
import {Container} from 'reactstrap'

export default function Page(props){

    const {uri} = useParams

    return (
        <Container className="">{uri}</Container>
    )
}