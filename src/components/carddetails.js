import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 16px;
  padding-bottom: 16px;
`

const CardDetails = () => (
  <>
    <StyledDetails>
      <div
        style={{
          fontSize: `22px`,
          paddingBottom: `8px`,
        }}
      >
        <b>Recipe #1</b>
      </div>
      <div></div>
      <div>Cook Time: 30 min</div>
      <div>Serves: 4</div>
    </StyledDetails>
  </>
)

export default CardDetails
