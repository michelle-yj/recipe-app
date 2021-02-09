import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import CardContainer from "./cardcontainer"
import CardDetails from "./carddetails"

const RecipesList = ({ data, count }) => {
  const { edges: recipes } = data.allMarkdownRemark

  return (
    <CardContainer>
      {recipes &&
        recipes
          .slice(0, count)
          .map(({ node: recipe }) => (
            <CardDetails key={recipe.id} recipe={recipe} />
          ))}
    </CardContainer>
  )
}

// eslint-disable-next-line react/require-default-props
export default props => (
  <StaticQuery
    query={graphql`
      query RecipesListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                serves
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 60) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <RecipesList
        data={data}
        count={props.count || data.allMarkdownRemark.edges.length}
      />
    )}
  />
)
