import { Link } from 'react-router-dom'
import {Button, Col, Container, Row} from 'reactstrap'
import MainNavbar from '../features/navbar/MainNavbar'
import './Home.css'

export default function Home(props){
    return (
        <Container className="">
            <Row id="top">
                <Col xs="12">
                    <MainNavbar />
                </Col>    
            </Row>
            <Row className="main">
                <Col xs="12" className="home-main">
                    <section>
                    <h1>Share your business online for free.</h1>
                    <Button color="success" tag={Link} to="/create-new-account">
                        Create a new account for free
                    </Button>&nbsp;
                    <Button color="primary" tag={Link} to="/login">
                        Login
                    </Button>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Link to="/about">About</Link> | <a href="#top">To top</a>
                </Col>
            </Row>
        </Container>
    )
}