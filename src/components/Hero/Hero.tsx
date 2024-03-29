import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="mt-5 hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12  intro">
            <p className="p-3 fs-4 text-white">
              At Zestlife Disability, we are a spirited bunch of NDIS
              superheroes on a mission to sprinkle some magic into everyday
              life. Our team of expert wizards is here to offer a helping hand
              with personal care and more because we believe in transforming
              challenges into triumphs!{' '}
              <Link href="/about-us">
                <button className="btn btn-primary fs-4">Read More</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
