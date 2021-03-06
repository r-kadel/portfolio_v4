
module.exports = {
  siteMetadata: {
    title: "Ryan Kadel's Portfolio",
    description: "This is Ryan Kadel's Portfolio Site built with Gatsby.js",
    author: "Ryan Kadel",
    siteUrl: "https://ryan.kadel.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://v4-portfolio-strapi.herokuapp.com`,
        contentTypes: [`jobs`, `projects`, `reviews`],
        singleTypes: [`about`],
        queryLimit: 5000,
      },
    },
  ],
}
