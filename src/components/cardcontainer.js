import React from "react"
import styled from "styled-components"

import CardDetails from "../components/carddetails"

const StyledContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid grey;
  width: 300px;
  height: 400px;
  margin-top: 24px;
  margin-right: 24px;
`

const CardContainer = () => (
  <>
    <StyledContainer>
      <CardDetails />
    </StyledContainer>
    <StyledContainer>
      <CardDetails />
    </StyledContainer>
  </>
)

export default CardContainer
