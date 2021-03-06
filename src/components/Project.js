import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, name, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {
        image && <Image fluid={image.childImageSharp.fluid} className="project-img" />
      }
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{name}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map( (tech) => {
            return <span key={tech.id}>{tech.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  name:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
}

export default Project
