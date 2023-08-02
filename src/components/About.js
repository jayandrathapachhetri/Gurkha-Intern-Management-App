import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center mb-3">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              It all started with Gurkha's Idea.
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              At Gurkha Technology, we understand the power of digital marketing
              in today’s competitive market. Our team of experienced
              professionals combines creativity, technical expertise, and
              industry insights to craft tailor-made digital marketing campaigns
              that drive growth and maximize ROI. From search engine
              optimization (SEO) and social media marketing to content creation
              and paid advertising, we offer a comprehensive range of services
              to enhance your online visibility and reach your target audience
              effectively.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="/Images/about-1.jpg" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center mb-3">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              We started Gurkha in 2016
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              As a trusted partner, we believe in brand humanization, creating
              authentic connections between businesses and their customers. We
              go beyond the surface to understand your brand’s unique identity
              and values, ensuring that every touchpoint reflects your brand
              essence and resonates with your audience. Our brand humanization
              strategies build trust, loyalty, and meaningful engagement,
              fostering long-term relationships that drive business success.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="img-fluid" src="/Images/about-2.jpg" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center mb-3">
          <div className="col-md-7 my-3">
            <h2 className="featurette-heading">
              First featurette heading. 
              <span className="text-muted"> It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              At Gurkha Technology, we are committed to knowledge sharing and
              empowering businesses through mentorship, training, and workshops.
              We believe in continuous learning and growth, and we offer
              comprehensive programs to equip businesses and individuals with
              the skills and knowledge needed to thrive in the digital age.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="/Images/about-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
