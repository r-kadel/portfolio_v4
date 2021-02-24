import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Review = ({ id, image, date, summary, slug, reviewer }) => {
  return (
    <Link className="review" to={`/reviews/${slug}`} key={id}>
      <article>
        {
          image && <Image className="review-img" fluid={image.childImageSharp.fluid} />
        }
        <div className="review-card">
          <h4>{reviewer}</h4>
          <p>{summary}</p>
          <div className="review-footer">
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Review.propTypes = {
  reviewer:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired
}

export default Review
