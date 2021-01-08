import React from "react"
import styled from "styled-components"
import { teal } from "../colours"

const StyledBanner = styled.div`
  background-color: ${teal};
  font-family: "Karla", sans-serif;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
`

const Banner = () => <StyledBanner>banner image goes here</StyledBanner>

export default Banner
