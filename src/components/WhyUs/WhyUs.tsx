import React from 'react';

const WebsiteSection = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="">Providing Support Where It's Needed Most</h3>
            <p>
              At Zest Life, our mission is to uplift and empower individuals to
              lead fulfilling lives. We're dedicated to offering personalized
              support that respects each person's unique journey and
              aspirations. Our comprehensive programs are tailored to address
              the holistic needs of our community members.
            </p>
            <p>
              With years of expertise and a commitment to excellence, our team
              is equipped to make a tangible impact in the lives of those we
              serve. We've cultivated a robust network of resources and
              partnerships to ensure that our participants receive the highest
              quality of care and support.
            </p>
            <p>
              If you or someone you know could benefit from our services, we
              encourage you to get in touch with us today. Together, we can
              navigate life's challenges and celebrate its triumphs.
            </p>
            <a
              href="https://zestlife.com.au/contact-us/"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/specialist-behaviour.png"
              alt="Zest Life participants"
              className="img-fluid"
            />
            <img
              src="./assets/‌innovation.png"
              alt="Zest Life participants smiling at sunset"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
