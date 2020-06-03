  
import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java Programmer at ESDLife, Digital Solution<span>2020-Present</span></h2>
                        <p>Participate Watson International E-Shop development</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>FullStack Programmer at Chow Sang Sang Holdings International Limited<span>2019-2020</span></h2>
                        <p>Participate RFID Tag Project and Revamp Supply Chain System from PowerBuilder to Single Page Application</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Amber Road, Inc.<span>2018-2019</span></h2>
                        <p>Develop and Maintain Online Supply Chain System for Nike, VF Corporation and In charge of iOS App for Item Inspection</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at The Hong Kong Polytechnic University <span>2014-2018</span></h2>
                          <p>
                            BEng (Hons) in Electronic &amp; Information Engineering
                          </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}