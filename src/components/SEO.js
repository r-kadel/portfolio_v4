import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, url, image } = site.siteMetadata
  return (
    <Helmet title={` ${title} | ${siteTitle} `} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={ description || siteDesc } />
    </Helmet>
  )
}

export default SEO
