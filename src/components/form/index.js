/* eslint-disable react/no-typos */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input } from 'reactstrap'

import './style.css'

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}

Component.propTypes = {
    title: PropTypes.string.isRequired
}

Component.defaultProps = {
    title: ''
}
