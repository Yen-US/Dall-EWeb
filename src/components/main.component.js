import React, { Component } from "react";
import Navigation from './navigation.component'
import Prompt from './prompt.component'
import Cards from './cards.component'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.data = []
  }

  componentDidMount() {
  }

  childtoParent = (childData) => {
    this.setState({ data: childData })
    console.log(this.state)
  }

  render() {
    return (
      <div data-testid="Main" className="bg-dark">
        <Navigation></Navigation>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs lg="6" className="mb-4 mt-4"><Prompt childtoParent={this.childtoParent}></Prompt></Col>
          </Row>
          <Row className="g-4 justify-content-center mb-2">
              <Cards imagesL={this.state.data}></Cards>
          </Row>
        </Container>


      </div>
    )
  }

}