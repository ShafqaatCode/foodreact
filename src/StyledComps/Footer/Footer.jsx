import React from "react";
import facebookIcon from "../../assets/facebook.png";
import youtubeIcon from "../../assets/youtube.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

import {
  FooterSection,
  FooterLinks,
  FooterLinkItem,
  FooterLink,
  FooterIcons,
  FooterCopywrite,
  FooterIconImage,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      {/* Links might get expanded later with login/profile */}
      <div className="links">
        <FooterLinks>
          <FooterLinkItem><FooterLink href="#">Forum</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">Register</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">Affiliate</FooterLink></FooterLinkItem>
          <FooterLinkItem><FooterLink href="#">FAQ</FooterLink></FooterLinkItem>
        </FooterLinks>
      </div>

      {/* Socials – might want to make these clickable with hrefs later */}
      <FooterIcons>
        <FooterIconImage src={facebookIcon} alt="Facebook" />
        <FooterIconImage src={youtubeIcon} alt="YouTube" />
        <FooterIconImage src={twitterIcon} alt="Twitter" />
        <FooterIconImage src={instagramIcon} alt="Instagram" />
      </FooterIcons>

      <FooterCopywrite>
        <p>Developed by Muhammad Shoaib</p>
        <p>© 2025 | All rights reserved.</p>
      </FooterCopywrite>
    </FooterSection>
  );
};

export default Footer;
