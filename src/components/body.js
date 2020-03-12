import React from "react";
import { Container } from "react-bootstrap";
import styles from "./body.module.scss";

function Body(props) {
  return <Container className={styles.body}>{props.children}</Container>;
}

export default Body;
