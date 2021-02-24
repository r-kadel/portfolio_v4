import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        strapiId
        dates
        Position
        job_description {
          desc
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, position, dates, job_description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={job.strapiId}
                onClick={ () => setValue(index) }
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {job_description.map( (desc) => {
            return <div className='job-desc' key={desc.id}>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{desc.desc}</p>
            </div>
          })}
        </article>
      </div>
      <Link to="/about" className='btn center-btn'>More Info</Link>
    </section>
  )
}

export default Jobs
