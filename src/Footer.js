import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer w3-container w3-padding-64 w3-bottom">
      <div className="w3-row-padding w3-margin w3-margin-bottom ">
        <div className="w3-third">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>investors Relation</p>
          <p>Amazon Tour</p>
        </div>
        <div className="w3-third">
          <h3>Make Money With Us</h3>
          <p>Sell all products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Become an Affiliate</p>
          <p>Host an Amazon Hub</p>
          <p>Advertise Your Products</p>
          <p>Amazon Devices</p>
        </div>
        <div className="w3-third">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Cards</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
      </div>

      <div className="w3-container w3-margin-top">
        <p className="w3-text-white w3-left w3-margin">
          Copyright &copy; 2021 Sunchu Vinod | powered by @Sunchu
        </p>
        <div className="w3-right w3-text-white w3-margin-right">
          <p>Privacy policies &nbsp;&nbsp; Terms & Conditions</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
