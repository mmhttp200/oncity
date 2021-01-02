import {Container, Row, Col, Form} from 'reactstrap'
import MainNavbar from '../features/navbar/MainNavbar'
import LoginForm from '../features/login/LoginForm'
import Footer from '../features/footer/Footer'
export default function Login(props){
    return (
        <Container className="">
            <Row>
                <Col xs="12">
                    <MainNavbar />
                </Col>
            </Row>
            <Row className="main">
                <Col xs="12" className="loginForm">
                    <LoginForm />
                </Col>
            </Row>
            <Row>
                <Col xs="12"><Footer /></Col>
            </Row>
        </Container>
    )
}