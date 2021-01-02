import {Col, Container, Row} from 'reactstrap'
import Footer from '../features/footer/Footer'
import MainNavbar from '../features/navbar/MainNavbar'
import RegistrationForm from '../features/registration/RegistrationForm'

export default function CreateNewAccount(props){
    return (
        <Container className="">
            <Row>
                <Col xs="12">
                    <MainNavbar />
                </Col>
            </Row>
            <Row className="main">
                <Col xs="12">
                    <RegistrationForm />
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