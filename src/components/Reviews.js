import React from "react"
import Title from "./Title"
import Review from "./Review"
import { Link } from "gatsby"
export const Reviews = ({reviews, title, showLink}) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center reviews-center">
        {reviews.map(review => {
          return <Review key={review.id} {...review} />
        })}
      </div>
      {
        showLink && <Link to="/reviews" className="btn center-btn">Reviews</Link>
      }
    </section>
  )
}
export default Reviews
