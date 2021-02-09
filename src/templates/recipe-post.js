import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import IngredientsList from "../components/ingredientslist"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  TwitterIcon,
} from "react-share"

export const RecipePostTemplate = props => {
  const shareUrl = `https://michellesrecipe.netlify.app${props.fields.slug}`
  return (
    <Layout>
      <div className="recipe-content">
        <Seo title={props.title} description={props.description} />
        <h1>{props.title}</h1>
        <p>
          <b>Serves:</b> {props.serves}
        </p>
        <PreviewCompatibleImage
          imageInfo={{
            image: props.featuredimage,
            alt: `image of ${props.title}`,
          }}
        />
        <IngredientsList>
          <div>
            <EmailShareButton
              subject="check out this recipe!"
              body="I thought you might like this recipe!"
              url={shareUrl}
            >
              <EmailIcon />
            </EmailShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon />
            </FacebookShareButton>
            <PinterestIcon />
            <TwitterIcon />
          </div>
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
      fields={post.fields}
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
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 400, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
