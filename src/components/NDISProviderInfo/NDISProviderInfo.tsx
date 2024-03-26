import React from 'react';

const NDISProviderInfo = () => {
  return (
    <div className="container ndis-provider mt-2 mb-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-2  fs-1 ">
            Proud to be a NDIS registered service provider!
          </h2>
          <p className="text-left fs-4 p-3">
            Our friendly team takes several approaches, and even customizes when
            needed the support programs depending on the physical and mental
            state of the participant. We strive to make a positive impact by
            providing compassionate care and promoting inclusivity in everything
            we do.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/house-hold-tasks.jpg"
            alt="Image 1"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Household Tasks</h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/assist-personal-activities.jpg"
            alt="Image 2"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Assist Personal Activities</h4>
        </div>
        {/* Add more images with titles */}
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/assist-travel-transport.jpg"
            alt="Image 3"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Assist Travel/Transport</h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/community-nursing-care.jpg"
            alt="Image 4"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Community Nursing Care</h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/development-life-skills.jpg"
            alt="Image 5"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Development Life Skills</h4>
        </div>

        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/participate-community-group.jpg"
            alt="Image 6"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">
            Community Group/Centre Activities
          </h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/‌innovation.png"
            alt="Image 7"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">
            Innovation Community Participation
          </h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/assist-daily.png"
            alt="Image 8"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">Assist Daily Living</h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/specialist-behaviour.png"
            alt="Image 9"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">
            Specialist Positive Behaviour Support
          </h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/assist-cord.png"
            alt="Image 10"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">
            Assist Co-ord Transition and Supports
          </h4>
        </div>
        <div className="col-md-4 mb-4 ndis-container">
          <img
            src="./assets/high-intensity.png"
            alt="Image 11"
            className="img-fluid"
          />
          <h4 className="mt-2 text-center fs-3">
            High Intensity Daily Personal Activities
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NDISProviderInfo;
