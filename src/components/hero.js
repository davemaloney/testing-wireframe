import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function HeroButton(props) {
  if (props.buttonText) {
    return (
      <p>
        <Button href={props.link} variant="primary">
          {props.buttonText}
        </Button>
      </p>
    );
  }
  return "";
}

function Hero(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <HeroButton {...props}></HeroButton>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
