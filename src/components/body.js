import React from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
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
          data-section={`${props.title}`}
        >
          Three
        </Button>
      </ButtonGroup>
      {props.children}
    </Container>
  );
}

export default Body;
