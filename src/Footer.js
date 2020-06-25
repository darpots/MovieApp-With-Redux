import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterInfo>
    <h4>M O V I E</h4>
    <p>A single page web app created in React.js using themoviedb.org API</p>
    <p>
      Coded by <a href="mailto:darpots@outlook.com">Darren Potter</a>
    </p>
  </FooterInfo>
);

export default Footer;

const FooterInfo = styled.div`
  color: white;
  background: #333;
  height: 200px;

  h4 {
    box-sizing: border-box;
    margin: 0;
    padding-top: 50px;
  }

  a {
    color: lightskyblue;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: cornflowerblue;
    }
  }
`;
