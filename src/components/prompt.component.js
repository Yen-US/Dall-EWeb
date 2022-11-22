import React, { Component } from "react";
import { DallEClient } from '../client/DallEClient';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { promptOption } from "../data/promptOption";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Prompt extends Component {
    DallEClient = new DallEClient();
    promptOption = new promptOption();

    constructor(props) {
        super(props);
        this.state = {
            valuePrompt: '',
            valueRange: 1,
            imageURLs: [],
            showModal: false,
            promptOption: "Select one option",
            prompt: [],
            promptOptionList: [],
            promptSelected: false,
            size: 1024
        };
        this.handleChangePrompt = this.handleChangePrompt.bind(this);
        this.handleChangeRange = this.handleChangeRange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setPromptOption = this.setPromptOption.bind(this);
    }

    componentDidMount() {
        this.setState({ promptOptionList: this.promptOption.getPromptOptionList() })
    }

    handleChangePrompt(event) {
        this.setState({ valuePrompt: event.target.value });
    }

    handleChangeRange(event) {
        this.setState({ valueRange: event.target.value / 10 });
    }

    handleSubmit(event) {
        this.newImages(this.state.valuePrompt, this.state.valueRange)
        event.preventDefault();
    }

    async newImages(promptTxt, number) {
        if (this.state.promptSelected) {
            const newImages = await this.DallEClient.newImages(promptTxt, number, this.state.prompt, this.state.size);
            this.setState({
                imageURLs: newImages
            });
            this.props.imagesF(newImages)
            console.log(this.state)
        } else {
            this.handleShowModal()
        }

    }

    componentDidUpdate(prevProps) {
        console.log(this.state)
    }

    handleCloseModal = () => this.setState({ showModal: false })
    handleShowModal = () => this.setState({ showModal: true })

    setPromptOption(val) {
        this.setState({ prompt: val.prompt })
        this.setState({ promptOption: val.name })
        this.handleCloseModal()
        this.setState({ promptSelected: true })

    }

    setSize(sizeval){
        this.setState({ size: sizeval })
    }

    render() {
        let options
        if (this.state.promptOptionList) {
            options = Array.from(this.state.promptOptionList).map((value, index) =>
                <Col md="auto">
                    <Card class="card border-warning mb-3 bg-transparent" border="dark" style={{ width: '15rem', height: '40rem' }}>
                        <Card.Img variant="top" src={value.image} />
                        <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                                {value.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.setPromptOption(value)}>
                                Use
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            {Array.from(value.keywords).map((value, index) =>
                                <Badge className="badge mx-1" bg="secondary">{value}</Badge>
                            )}
                        </Card.Footer>
                    </Card>
                </Col>


            )
        } else {
            options = "error no promptOptions"
        }


        return (
            <div data-testid="Prompt">
                <>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mt-3" >
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your prompt, words separated by comma"
                                aria-label="Enter your prompt, words separated by comma"
                                aria-describedby="basic-addon2"
                                value={this.state.value} onChange={this.handleChangePrompt}
                            />

                            <Button variant="outline-success" onClick={this.handleShowModal}>
                                {this.state.promptOption}
                            </Button>

                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    {this.state.size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.setSize(256)}>256</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.setSize(512)}>512</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.setSize(1024)}>1024</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button variant="outline-success" id="button-addon2" type="submit" value="Submit">
                                Submit
                            </Button>


                        </InputGroup>
                        <InputGroup className="mt-4 mb-1" >
                            <Form.Range step="10" min="10" max="100" onChange={this.handleChangeRange} />

                            <Form.Label variant="white"><Badge className="position-absolute top-0 start-50 translate-middle badge" bg="secondary"> {this.state.valueRange} </Badge></Form.Label>
                        </InputGroup>

                    </Form>

                    <Modal size="xl" class='bg-dark fade dark' show={this.state.showModal} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Prompt Options</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                            <Container>
                                <Row className="g-4 justify-content-md-center">
                                    {options}
                                </Row>
                            </Container>

                        </Modal.Body>
                        <Modal.Footer>
                            <Badge bg="primary" >Click on the Use button</Badge>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        )
    }

}