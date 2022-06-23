import React from "react";
import {Link} from "react-router-dom"
import { AiFillGithub } from 'react-icons/ai';

import {
    
  Box,
  Container,
  FooterLink
} from "./FooterStyle.js";
  
const Footer = () => {
    const fontStyles = {color: 'white', fontSize: '80px'};

  return (
    <Box>
  
  
      <h1 style={{ color: "White", 
                   textAlign: "center", 
                   marginTop: "-60px" }}>
                  
                kaikashimoon
      </h1>
      <FooterLink >
                  <a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"> <AiFillGithub style={fontStyles}/> </a>
                  <p>&copy;Copyright, all rights reserved. 2022.</p>
    </FooterLink>
           

  
    </Box>
  );
};
export default Footer;