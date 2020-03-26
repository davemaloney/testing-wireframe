import React from "react";
import { Container } from "react-bootstrap";
import styles from "./adunit.module.scss";

// const AdFuel = window.AdFuel;

class AdUnit extends React.Component {
  // componentDidMount() {
  //   /**
  //    * @file
  //    * Set a listener for GPTRenderComplete Event.
  //    */

  //   // If ad_bnr_atf_01 is 728x90, dispatch the ad_nfs_atf_01 slot.
  //   window.AdFuelUtils.addEvent(document, "GPTRenderComplete", function(event) {
  //     if (!event.detail.empty) {
  //       // var gptSlot = event.detail.asset;
  //       var renderedSlotId = event.detail.pos[0];
  //       // var renderedDivID = event.detail.divId;
  //       var adSizeWidth = event.detail.renderedSize[0];
  //       var adSizeHeight = event.detail.renderedSize[1];
  //       // console.log("ADFUEL: DivID: "+renderedDivID+" Size: "+adSizeWidth+"X"+adSizeHeight);.
  //       if (
  //         renderedSlotId === "bnr_atf_01" &&
  //         adSizeWidth === 728 &&
  //         adSizeHeight === 90
  //       ) {
  //         var elem = document.getElementsByClassName("global-banner-ad-200-90");
  //         if (elem && elem[0]) {
  //           elem[0].style.display = "inline-block";
  //           if (
  //             elem[0].children.length &&
  //             elem[0].children[0].id === "ad_mod_5d3a52fcb"
  //           ) {
  //             window.AdFuel.queueRegistry(
  //               "//i.cdn.turner.com/ads/nba2/singles/nba_global_mktg_homepage.js"
  //             );
  //           } else if (
  //             elem[0].children.length &&
  //             elem[0].children[0].id === "ad_mod_67821a2c7"
  //           ) {
  //             window.AdFuel.queueRegistry(
  //               "//i.cdn.turner.com/ads/nba2/singles/nba_global_mktg_gamedetails.js"
  //             );
  //           } else {
  //             window.AdFuel.queueRegistry(
  //               "//i.cdn.turner.com/ads/nba2/singles/nba_global_mktg.js"
  //             );
  //           }
  //           // console.log("ADFUEL: Dispatched Marketing Ad");.
  //         }
  //       }
  //     }
  //   });

  //   (function() {
  //     // "use strict";
  //     checkDesktopStatus();
  //     if (typeof coreVideoPlayerConfig !== "undefined") {
  //       var elem = document.getElementsByClassName("global-banner-ad-200-90");
  //       elem[0].style.display = "inline-block";
  //       window.AdFuel.queueRegistry(
  //         "//i.cdn.turner.com/ads/nba2/singles/nba_global_mktg.js"
  //       );
  //       // console.log("ADFUEL: Dispatched Marketing Ad");.
  //     }

  //     function checkDesktopStatus() {
  //       var os = window._client.settings.device.os;

  //       // No device characteristics were set, use the UA.
  //       if (window._client.settings.device.os === "device_os") {
  //         return !checkMobile();
  //       }

  //       if (
  //         os === "Windows" ||
  //         os.indexOf("Windows NT") !== -1 ||
  //         os === "Linux" ||
  //         os.indexOf("Mac OS X") !== -1 ||
  //         os === "Macintosh" ||
  //         os.indexOf("Chrome OS") !== -1
  //       ) {
  //         // When DFP ad is 728x90 and above, force FW params to be 728x90
  //         document.getElementById("_fw_input_global_banner")[0].setAttribute(
  //           // jQuery("#_fw_input_global_banner").attr(
  //           "value",
  //           "slau=728x90_sync&w=728&h=90&envp=g_js&sflg=-nrpl"
  //         );
  //         return true;
  //       }
  //       // When DFP ad is 320x50 and below, force FW params to be 320x50
  //       document.getElementById("_fw_input_global_banner")[0].setAttribute(
  //         // jQuery("#_fw_input_global_banner").attr(
  //         "value",
  //         "slau=320x50_spon&w=320&h=50&envp=g_js&sflg=-nrpl"
  //       );
  //       return false;
  //     }

  //     function checkMobile() {
  //       //backup for javascriptGlobalSettings.json not loading
  //       var isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
  //         window.navigator.userAgent
  //       );

  //       // this is not by any means perfect, but is meant as a backup
  //       if (isMobile) {
  //         return true;
  //       }

  //       return false;
  //     }
  //   })();
  // }

  render() {
    return (
      <Container fluid className={styles.adunit}>
        Ads here
        <section
          id="block-globalheaderadblock"
          className="block-globalheaderadblock"
        >
          <div className="nba-ad-container light-gray global-nav">
            <div className="nba-ad freewheel global-banner">
              <span
                id="global_banner"
                className="_fwph"
                style={{ fontSize: 0 }}
              >
                <form id="_fw_form_global_banner">
                  <input
                    type="hidden"
                    name="_fw_input_global_banner"
                    id="_fw_input_global_banner"
                    value=""
                  />
                </form>
                <span id="_fw_container_global_banner" className="_fwac">
                  <div
                    id="ad_bnr_atf_01"
                    className="nba-ad dfp nba-ad-wrap-has-singleton-left"
                  ></div>
                </span>
              </span>
            </div>
            <div className="global-banner-ad-200-90">
              <div id="ad_mod_5d3a52fcb" className="nba-ad"></div>
            </div>
          </div>
        </section>
        <div className="nba-ad-container field-item">
          <div id="ad_bnr_atf_02" className="nba-ad dfp"></div>
        </div>
        <div className="nba-ad-container field-item">
          <div id="ad_bnr_btf_01" className="nba-ad lazy-ad"></div>
        </div>
      </Container>
    );
  }
}

export default AdUnit;
