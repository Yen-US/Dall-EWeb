import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';


import Col from 'react-bootstrap/Col';

export default class Cards extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: '',
            imageURLs: [],
            show: false,
            counter: 3
        };
        this.target = null
    }

    componentDidMount() {
    }


    componentDidUpdate(prevProps, prevState) {
    }

    copyLink(url) {
        this.setState({ show: true })
        navigator.clipboard.writeText(url)
        let intervalID = setInterval(() => this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : this.resetCounter(intervalID), 1000);
    }

    resetCounter(intervalID) {
        this.setState({ counter: 3 })
        this.setState({ show: false })
        clearInterval(intervalID);
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


                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        Link <strong>Copied</strong>!
                                    </Tooltip>
                                }
                                show={this.state.show}
                            >
                                <Button variant="primary" onClick={() => this.copyLink(value.url)}>Copy link</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </Col>

            )
        } else {
            if(this.props.error){
                cards = <Col xs lg="6" className="mb-4 mt-4"><Alert variant="danger">Error: {this.props.errorMessage}</Alert></Col>
            }else if(this.props.loading){
                cards = <Col md="auto" className="mb-4"><Spinner animation="grow" variant="primary" /></Col>
            }else{
                cards =
                <Col md="auto">
                    <Alert key='primary' variant='primary'>
                        You can select a prompt option and enter your prompt text above to generate beautiful images based on your amazing ideas!
                    </Alert>
                </Col>
            }
            

        }


        return (
            <>
                {cards}
            </>
        )
    }

}