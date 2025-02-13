import React, { Component } from 'react'

export default class Skill extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skill">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-html-five" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>Experienced on React and Angular Js with Sage/Redux and NgRx Framework</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Software Development</h3>
                    <p>Experienced on Spring Module (Core, MVC, Boot, Security, AOP) and Java 7/8/11</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Database</h3>
                    <p>Experienced on Oracle,MySQL,SQLite,MongoDB, Hibernate and MyBatis</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-infinity" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Create Jenkins pipeline for auto daily buld and Convert Spring Boot Application to Docker Image and manage by K8s</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-appleinc" />
                </span>
                <div className="desc">
                    <h3>Mobile App Development</h3>
                    <p>Experience with developmenting iOS app with Objective C</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-shop" />
                </span>
                <div className="desc">
                    <h3>E-Commerce Development</h3>
                    <p>Experience with Hybris development which is part of SAP module work for E-Commerce</p>
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