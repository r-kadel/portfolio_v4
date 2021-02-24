import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch!</h3>
          <form action="https://formspree.io/f/mwkwdklg" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" name="name"/>
              <input type="email" name="email" placeholder="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="please enter your message here" className="form-control"></textarea>
            </div>
            <button className="submit-btn btn" type="submit">submit</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
