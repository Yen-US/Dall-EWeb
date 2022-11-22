import React, { Component } from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

  }



  render() {

    return (
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <Container>
          <Row>
            <Col className="text-center d-flex align-items-center">
              <span class="text-muted">&copy; 2022 Yen-US</span>
            </Col>
            <Col className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-muted" href=""><svg class="bi" width="24" height="24"><BsTwitter /></svg></a></li>
              <li class="ms-3"><a class="text-muted" href=""><svg class="bi" width="24" height="24"><BsInstagram /></svg></a></li>
              <li class="ms-3"><a class="text-muted" href=""><svg class="bi" width="24" height="24"><BsFacebook /></svg></a></li>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }

}