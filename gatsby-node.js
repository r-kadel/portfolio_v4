const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      reviews: allStrapiReviews {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.reviews.nodes.forEach(review => {
    createPage({
      path: `/reviews/${review.slug}`,
      component: path.resolve(`src/templates/review-template.js`),
      context: {
        slug: review.slug,
      },
    })
  })
}
