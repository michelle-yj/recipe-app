import React from "react"
import styled from "styled-components"

import CardDetails from "../components/carddetails"

const StyledContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-right: 24px;
`

const CardContainer = props => (
  <>
    <StyledContainer>{props.children}</StyledContainer>
  </>
)

export default CardContainer
