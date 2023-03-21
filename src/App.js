import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Navigation from './components/navigation.component'
import Prompt from './components/prompt.component'
import Cards from './components/cards.component'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/footer.component'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promptData: [],
      loading: false,
      error: false,
      errorMessage: ''
    };
    this.data = []

  }

  componentDidMount() {
  }

  imagesF = (promptDatachild) => {
    this.setState({ promptData: promptDatachild })
  }

  loadingF = (promptDatachild) => {
    this.setState({ loading: promptDatachild })
  }

  errorF = (errorB, errorM) => {
    this.setState({
      errorMessage: errorM,
      error: errorB
    })
  }

  render() {
    return (
      <html className="bg-dark">
        <header className="App-header">
          <Navigation></Navigation>
        </header>
        <main className="bg-dark">

          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="6" className="mb-4 mt-4"><Prompt imagesF={this.imagesF} loadingF={this.loadingF} errorF={this.errorF}> </Prompt></Col>
            </Row>
            <Row className="g-4 justify-content-md-center">
              <Cards imagesL={this.state.promptData} error={this.state.error} errorMessage={this.state.errorMessage} loading={this.state.loading}></Cards>
            </Row>

          </Container>

        </main>
        <Container fluid>
          <Footer />
        </Container>
      </html>

    )
  }

}
