import React from "react";
import { Container, Button, ButtonGroup, Card } from "react-bootstrap";
import styles from "./body.module.scss";

function Body(props) {
  return (
    <Container className={styles.body}>
      <ButtonGroup>
        <Button
          data-track="click"
          data-id={`test-site:${props.title}:body:button`}
          data-type="button"
          data-pos="1"
          data-text="One"
          data-content="One Page"
          data-section={`${props.title}`}
        >
          One
        </Button>
        <Button
          data-track="click"
          data-id={`test-site:${props.title}:body:button`}
          data-type="button"
          data-pos="2"
          data-text="Two"
          data-content="Two Page"
          data-section={`${props.title}`}
        >
          Two
        </Button>
        <Button
          data-track="click"
          data-id={`test-site:${props.title}:body:button`}
          data-type="button"
          data-pos="3"
          data-text="Three"
          data-content="Three Page"
          data-section={props.title}
        >
          Three
        </Button>
      </ButtonGroup>
      <p></p>
      <Card
        bg="dark"
        text="white"
        data-track="click"
        data-id={`test-site:${props.title}:body:card`}
        data-type="card"
        data-text={props.linkText}
        data-content={props.linkDestination}
        data-section={props.title}
      >
        <Card.Body>
          <Card.Title>Messy Markup</Card.Title>
          <Card.Subtitle>Large click tracker, small click target</Card.Subtitle>
          <Card.Text>
            The clickable element is the button, but click tracking is on the
            whole card.
          </Card.Text>
          <Button href={props.linkDestination}>{props.linkText}</Button>
        </Card.Body>
      </Card>
      <p></p>
      {props.children}
    </Container>
  );
}

export default Body;
