import React from "react";
import { Container } from "react-bootstrap";
import styles from "./adunit.module.scss";

// const AdFuel = window.AdFuel;

class AdUnit extends React.Component {
  render() {
    const ads = ["bnr_a", "bnr_b", "ns_a"];
    const ad = ads[Math.floor(Math.random() * ads.length)];
    return (
      <Container fluid className={styles.adunit}>
        Ads here
        <div className="nba-ad-container field-item">
          <div id={`ad_${ad}tf_01`} className="nba-ad lazy-ad"></div>
        </div>
      </Container>
    );
  }
}

export default AdUnit;
