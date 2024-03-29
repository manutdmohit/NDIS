import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WebsiteSection = () => {
  return (
    <section className="why-us-section mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4 fs-3">
              Providing Support Where It's Needed Most
            </h3>
            <p className="mb-3 fs-5">
              At Zest Life, our mission is to uplift and empower individuals to
              lead fulfilling lives. We're dedicated to offering personalized
              support that respects each person's unique journey and
              aspirations. Our comprehensive programs are tailored to address
              the holistic needs of our community members.
            </p>
            <p className="mb-3 fs-5">
              With years of expertise and a commitment to excellence, our team
              is equipped to make a tangible impact in the lives of those we
              serve. We've cultivated a robust network of resources and
              partnerships to ensure that our participants receive the highest
              quality of care and support.
            </p>
            <p className="mb-3 fs-5">
              If you or someone you know could benefit from our services, we
              encourage you to get in touch with us today. Together, we can
              navigate life's challenges and celebrate its triumphs.
            </p>
            <Link href="/contact-us/" className="btn btn-primary fs-4">
              Get In Touch
            </Link>
          </div>
          <div className="col-md-6 position-relative images-section">
            <Image
              src="/assets/specialist-behaviour.png"
              alt="Zest Life participants"
              className="rounded img-fluid"
              width={500}
              height={375}
              layout="responsive"
            />
            <div
              className="position-absolute top-0 me-3 "
              style={{ width: '100px', height: '100px' }}
            >
              <Image
                src="/assets/high-intensity.png"
                alt="Zest Life participants smiling at sunset"
                className="rounded-circle second-image"
                layout="fill"
                objectFit="cover"
                sizes="100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
