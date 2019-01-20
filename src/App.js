import React, { Component } from 'react';
import './App.css';
import {
  Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="bg-info">
          <h1>Checkout the reactstrap jumbotron!</h1>
          <p className="lead">Just a simple jumbotron to start things off.</p>
        </Jumbotron>

        <div>

        </div>
        <Container>
          <Row>
            <Col xs="12" sm="4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" >
              <div className="main">
                <p>Putting some test here to see what happens.  This will be a paragraph to display some information.  It will be long to see how
                it looks on the page.  And needs some extra text here to wrap.
              </p>
                <p>Then there is this other paragraph.  This will be a paragraph to display some information.  It will be long to see how
                it looks on the page.
              </p>
              </div>
            </Col>
          </Row>

        </Container>

      </div>
    );
  }
}

export default App;
