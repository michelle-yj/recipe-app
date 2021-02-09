import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 16px;
  padding-bottom: 16px;
  width: 33%;
  border: 1px solid grey;
  height: 400px;
  margin: 16px;
`

const CardDetails = ({ recipe }) => (
  <>
    <StyledDetails>
      <div
        style={{
          fontSize: `22px`,
          paddingBottom: `8px`,
        }}
      >
        {console.log(recipe)}
        <b>
          <Link to={recipe.fields.slug}>{recipe.frontmatter.title}</Link>
        </b>
      </div>
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: recipe.frontmatter.featuredimage,
            alt: `image of ${recipe.frontmatter.title}`,
          }}
        />
      </div>
      <div>Cook Time: 30 min</div>
      <div>Serves: {recipe.frontmatter.serves}</div>
    </StyledDetails>
  </>
)

export default CardDetails
