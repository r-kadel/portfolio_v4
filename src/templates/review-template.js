import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({data}) => {
  const {content} = data.review;
  return <Layout>
    <section className="review-template">
      <div className="section-center">
        <article className="review-content">
          <ReactMarkdown source={content} />
        </article>
        <Link to="/reviews" className="btn center-btn">
          Back to Reviews
        </Link>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleReview($slug: String) {
    review: strapiReviews(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
