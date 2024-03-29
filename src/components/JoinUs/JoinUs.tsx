import React from 'react';
import Link from 'next/link';

const JoinUsSection = () => {
  return (
    <section className="bg-image position-relative mb-5">
      <div className="overlay"></div>
      <div className="container text-center text-white py-5 position-relative">
        <h2 className="display-4 mb-4">Join Us</h2>
        <p className="lead mb-5">
          "The only disability in life is a bad attitude. With a positive
          mindset, determination, and the right support, anything is possible."
        </p>
        <Link href="/contact-us">
          <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill">
            Get Connected
          </button>
        </Link>
      </div>
      <style jsx>{`
        .bg-image {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url('./assets/bg.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 767px) {
          .bg-image {
            height: auto;
            padding: 100px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinUsSection;
