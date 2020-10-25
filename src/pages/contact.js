import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Contact" description="Contact Dimas Abimanyu"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get in touch</h3>
        <form action="https://formspree.io/f/mrgoqlkd" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" name="name" />
            <input type="email" placeholder="email" className="form-control" name="email" />
            <textarea name="message" id="" rows="10" placeholder="message" className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">Submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
