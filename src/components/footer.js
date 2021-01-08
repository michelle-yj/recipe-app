import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  font-family: "Karla", sans-serif;
  width: 100%;
  bottom: 0px;
  text-align: center;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </StyledFooter>
)

export default Footer
