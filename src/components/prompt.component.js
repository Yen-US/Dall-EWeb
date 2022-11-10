import React, { Component } from "react";
import { DallEClient } from '../client/DallEClient';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

export default class Prompt extends Component {
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
        this.props.childtoParent(newImages)
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        console.log(this.state)
    }

    render() {
        return (
            <div data-testid="Prompt">
                <>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mt-3 mb-3" >
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your prompt, words separated by comma"
                                aria-label="Enter your prompt, words separated by comma"
                                aria-describedby="basic-addon2"
                                value={this.state.value} onChange={this.handleChange}
                            />
                            <Button variant="primary" id="button-addon2" type="submit" value="Submit">
                                Submit
                            </Button>
                        </InputGroup>

                    </Form>
                </>
            </div>
        )
    }

}