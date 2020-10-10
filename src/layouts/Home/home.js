import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import ButtonWhite from '../../components/button-white'

import './style.css'

export default class Home extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-home">
                    <Row>
                        <Col md="12" className="d-block text-center">
                            <Row md="auto d-block text-center">
                                <Col md="auto d-block text-center">
                                    <Link to="/register">
                                        <ButtonWhite title="Register Account"></ButtonWhite>
                                    </Link>
                                    <Link to="/login">
                                        <ButtonWhite title="Login"></ButtonWhite>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
