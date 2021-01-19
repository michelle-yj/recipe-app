import React from "react"
import styled from "styled-components"
import { pastelYellow } from "../colours"

const StyledIngredients = styled.div`
  background-color: ${pastelYellow};
  font-family: "Karla", sans-serif;
  width: 75%;
  height: 100%;
  padding: 20px;
  margin-bottom: 20px;
`

const IngredientsList = props => (
  <StyledIngredients>{props.children}</StyledIngredients>
)

export default IngredientsList
