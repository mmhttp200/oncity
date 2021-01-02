import {Col, Container, Row} from 'reactstrap'
import MainNavbar from '../features/navbar/MainNavbar'
import Footer from '../features/footer/Footer'
import PageDashboard from '../features/dashboard/PageDashboard'

export default function Dashboard(props){
    return (
        <Container className="">
            <Row>
                <Col xs="12">
                <MainNavbar />
                </Col>
            </Row>
            <Row className="main">
                <Col xs="12">
                    <PageDashboard />
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