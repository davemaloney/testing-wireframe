import React from "react";
import { Container, Button } from "react-bootstrap";

function footerClick() {
  if (window._satellite) {
    window._satellite.track("cookie preferences");
  }
}

function FooterButton(props) {
  return (
    <p className="text-center">
      <Button onClick={footerClick} href={props.link} variant="primary">
        {props.buttonText ? props.buttonText : "Cookie Settings"}
      </Button>
    </p>
  );
}

function Footer(props) {
  return (
    <Container>
      <FooterButton {...props}></FooterButton>
    </Container>
  );
}

export default Footer;
