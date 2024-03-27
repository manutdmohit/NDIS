import React from 'react';

const HeroSection = () => {
  return (
    <section className="mt-5 hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6  intro">
            {/* <p className="p-3 fs-4 text-black">
              We are a young team of dedicated NDIS service providers committed
              to enhancing the lives of individuals. With a team of skilled
              professionals, we offer a range of services including personal
              care, community access, and many more. We strive to make a
              positive impact by providing compassionate care and promoting
              inclusivity in everything we do.
            </p> */}

            <p className="p-3 fs-4 text-white">
              At Zestlife Disability, we are a spirited bunch of NDIS
              superheroes on a mission to sprinkle some magic into everyday
              life. Our team of expert wizards is here to offer a helping hand
              with personal care and more because we believe in transforming
              challenges into triumphs!{' '}
              <button className="btn btn-primary fs-4">Read More</button>
            </p>

            {/* <p className="p-3 fs-4">
              At Zestlife Disability, we are a passionate team dedicated to
              empowering individuals through our NDIS services. With our skilled
              professionals, we provide personalized care and support to enhance
              the quality of life.
            </p> */}
          </div>

          {/* <div className="col-md-6 logo">
            <img src="./assets/logo.jpg" alt="logo" className="img-fluid" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
