import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Reviews from "../components/Reviews"
import SEO from "../components/SEO"

const Review = ({
  data: {
    allStrapiReviews: { nodes: reviews },
  },
}) => {
  return (
    <Layout>
      <SEO title="Reviews" description="Reviews of Ryan's Work" />
      <section className="review-page">
        <Reviews reviews={reviews} title="latest reviews" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiReviews {
      nodes {
        slug
        date(formatString: "MMMM Do, YYYY")
        id
        reviewer
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        summary
      }
    }
  }
`
export default Review
