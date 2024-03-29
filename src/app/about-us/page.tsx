import React from 'react';
import Header from '../../components/Header/Header';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="p-5 mt-3 mb-5 hero-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <Image
                src="/assets/1.jpg"
                alt="Image 1"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <p className="p-3 fs-4 text-black">
                We are a young team of dedicated NDIS service providers
                committed to enhancing the lives of individuals. With a team of
                skilled professionals, we offer a range of services including
                personal care, community access, and many more. We strive to
                make a positive impact by providing compassionate care and
                promoting inclusivity in everything we do.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2">
              <Image
                src="/assets/2.jpg"
                alt="Image 2"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="p-3 fs-4">
                At Zestlife Disability, we are a spirited bunch of NDIS
                superheroes on a mission to sprinkle some magic into everyday
                life. Our team of expert wizards is here to offer a helping hand
                with personal care and more because we believe in transforming
                challenges into triumphs!
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image
                src="/assets/3.jpg"
                alt="Image 3"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <p className="p-3 fs-4">
                At Zestlife Disability, we are a passionate team dedicated to
                empowering individuals through our NDIS services. With our
                skilled professionals, we provide personalized care and support
                to enhance the quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
