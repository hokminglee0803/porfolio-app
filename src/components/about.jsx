import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Hi!</h2>
                    <p>I am Marco Lee who has been an Fullstack Programmer for 2 years.</p>
                    <p>In the past, programmer may only focus on Front End and Back End Devlopment. However, we need to put more effort on other topic on DevOps, Database, Testing and Managment now.</p>
                    <p>Programming is a lifelong learning. We can explore new idea every day. Please feel free to share any idea or news with me!</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}