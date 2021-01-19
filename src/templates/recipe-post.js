import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import IngredientsList from "../components/ingredientslist"

export const RecipePostTemplate = props => {
  return (
    <Layout>
      <div className="recipe-content">
        <Seo title={props.title} description={props.description} />
        <h1>{props.title}</h1>
        <p>
          <b>Serves:</b> {props.serves}
        </p>
        <IngredientsList>
          <p>
            <b>Ingredients:</b>
          </p>
          <ul>
            {props.ingredients.map(item => (
              <li key={item.ingredient}>
                {item.quantity} of {item.ingredient}
              </li>
            ))}
          </ul>
        </IngredientsList>
        <p>
          <b>Steps:</b>
        </p>
        <ol>
          {props.steps.map(item => (
            <li key={item.step}>{item.step}</li>
          ))}
        </ol>
        <section
          dangerouslySetInnerHTML={{ __html: props.content }}
          itemProp="articleBody"
        />
      </div>
    </Layout>
  )
}

const recipePost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <RecipePostTemplate
      content={post.html}
      title={post.frontmatter.title}
      featuredimage={post.frontmatter.featuredimage}
      description={post.frontmatter.description}
      ingredients={post.frontmatter.ingredients}
      steps={post.frontmatter.steps}
      serves={post.frontmatter.serves}
    />
  )
}

export default recipePost

export const pageQuery = graphql`
  query recipePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        ingredients {
          ingredient
          quantity
        }
        steps {
          step
        }
        serves
      }
    }
  }
`
