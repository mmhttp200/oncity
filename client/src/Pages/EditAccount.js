import {Col, Container, Row} from 'reactstrap'
import MainNavbar from '../features/navbar/MainNavbar'
import Footer from '../features/footer/Footer'
import UpdateEmail from '../features/updateEmail/UpdateEmail'
import UpdatePassword from '../features/updatePassword/UpdatePassword'

export default function EditAccount(props){
    return (
        <Container className="">
            <Row>
                <Col xs="12">
                    <MainNavbar />
                </Col>
            </Row>
            <Row className="main">
                <Col xs="12">
                    <UpdateEmail />
                </Col>
                <Col xs="12">
                    <UpdatePassword />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}