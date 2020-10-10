import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'
import IMAGES from '../../configs/images'

export default class Home extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-onboarding">
                    <Row>
                        <Col md="12" className="d-block text-center">
                            <Row md="auto d-block text-center">
                            <img src={IMAGES.computer} alt="" className="img-fluid mb-4" />
                                <Col md="auto d-block text-center">
                                    <p className="title-onboarding">Welcome to the App</p>
                                    <p className="content-onboarding">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
