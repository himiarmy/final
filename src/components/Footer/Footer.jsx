
import React from "react";
import "../Footer/Footer.css"

let footerContainer = {
  position: "relative",
  zIndex: 999,
  fontSize: 0,
backgroundColor: "#000",
  backgroundSize: "cover",
  margin: "0 auto",
  textAlign: "center",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "20vh",
};
let footerWrap = {
  textAlign: "center",
};
let copyrightWrapper = {
  textTransform: "uppercase",
  color: "pink",
  letterSpacing: 0,
  lineHeight: 1.3,
  fontFamily: "'Gothic A1', sans-serif",
  fontWeight: 700,
  maxWidth: "40vw",
  margin: "0 auto",
  padding: "1.3vw 0",
};

const Footer = () => {
  return (
    <>
      <div style={footerContainer}>
        <div style={footerWrap}>
          <div className="adap-foot" style={copyrightWrapper}>
            <span>© 2021 MOÉ </span>
            <br />
            <span>
              TERMS OF USE | PRIVACY POLICY | CONTACT US
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;