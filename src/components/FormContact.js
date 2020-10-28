import React from "react"
import Title from "./Title"

const contact = () => {
  return <section className="contact section" id="contact">
      <div className="contact-form container">
      <Title title="contact me" />
        <form action="https://formspree.io/f/mrgoqlkd" method="POST">
            <div className="form-group grid-2">
                <div>
                    <input type="text" placeholder="Name *" className="form-control" name="name" />
                </div>
                <div> 
                    <input type="email" className="form-control" name="email" placeholder="Email *" />
                </div>
            </div>
            <div className="form-group">
                <div className="contact-msg">
                    <textarea name="message" rows="100" cols="100" id="" className="form-control" placeholder="Message *"></textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-submit">Submit here</button>
        </form>
      </div>
    </section>
}

export default contact
