import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import ButtonBlue from '../../components/button-blue'
import Form from '../../components/form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default class Login extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-back">
                <Link to="/register">
                        <FontAwesomeIcon className="icon-arrow-left" icon={faArrowLeft} />
                    </Link>
                </Container>
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Container className="container-white">
                            <p className="title">Login</p>
                            <Col md="12" className="d-block text-center">
                                <Row md="auto d-block text-center">
                                    <Form />
                                    <Col md="auto d-block text-center">
                                        <Link to="/onboarding">
                                            <ButtonBlue title="Login"></ButtonBlue>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Container>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
