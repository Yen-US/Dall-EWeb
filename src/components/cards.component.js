import React, { Component } from "react";
import { DallEClient } from '../client/DallEClient';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Cards extends Component {
    DallEClient = new DallEClient();

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            imageURLs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.newImages(this.state.value)
        event.preventDefault();
    }

    async newImages(prompt) {
        const newImages = await this.DallEClient.newImages();
        this.setState({
            imageURLs: newImages
        });
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        console.log(this.state)
        console.log(prevProps)
    }

    render() {
        let cards
        if (this.props.imagesL.length) {
            cards = Array.from(this.props.imagesL).map((value, index) =>
                <Col md="auto">
                    <Card class="card border-warning mb-3 bg-transparent" border="dark" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={value.url} />
                        <Card.Body>
                            <Card.Title>Generated image {index + 1}</Card.Title>
                            <Button variant="primary">Share</Button>
                        </Card.Body>
                    </Card>
                </Col>

            )
        } else {
            cards =
                <Col md="auto">
                    <Card class="card border-warning mb-3 bg-transparent" border="dark" style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title>Please add your prompt and submit</Card.Title>
                            <Button variant="primary">Share</Button>
                        </Card.Body>
                    </Card>
                </Col>

        }


        return (
            <>
                {cards}
            </>
        )
    }

}