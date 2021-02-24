import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Reviews from "../components/Reviews"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiReviews: { nodes: reviews },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Reviews reviews={reviews} title="reviews" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        name
        github
        id
        url
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiReviews(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        date(formatString: "MMMM Do, YYYY")
        id
        reviewer
        summary
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
