import React from 'react';

const NDISScheme = () => {
  return (
    <section className="ndis-section mb-5">
      <div className="container">
        <div className="text-center mb-4 ">
          <img
            src="/assets/ndis-support.png"
            alt="NDIS Logo"
            className="img-fluid"
          />
        </div>
        <h2 className="text-center mb-3 fs-3 fw-bold">
          The National Disability Insurance Scheme (NDIS)
        </h2>
        <p className="text-left fs-4">
          NDIS is a scheme of the Australian Government legislated in 2013 that
          funds costs associated with disability and it is administered by the
          National Disability Insurance Agency (NDIA).
        </p>
        <p className="text-center">
          NDIS fully supports people with disability
        </p>
        <p className="text-center">
          <a
            href="https://beyondservices.com.au/i-support-ndis/"
            className="btn btn-primary"
            target="_blank"
          >
            Learn more
          </a>
        </p>
      </div>
    </section>
  );
};

export default NDISScheme;
