import React from 'react';
import {
  FaHouseUser,
  FaWalking,
  FaCarSide,
  FaUserNurse,
  FaGraduationCap,
  FaUserFriends,
  FaBrain,
  FaHandHoldingHeart,
  FaHandSparkles,
  FaClipboardList,
  FaUserShield,
} from 'react-icons/fa';

const NDISProviderInfo = () => {
  return (
    <div className="ndis-container">
      <div className="container ndis-provider my-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-3 fs-2 service">
              Proud to be a NDIS registered service provider!
            </h2>
            <p className="text-left fs-5 service">
              Our friendly team takes several approaches, and even customizes
              when needed the support programs depending on the physical and
              mental state of the participant. We strive to make a positive
              impact by providing compassionate care and promoting inclusivity
              in everything we do.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaHouseUser size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Household Tasks
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaWalking size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Assist Personal Activities
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaCarSide size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Assist Travel/Transport
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaUserNurse size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Community Nursing Care
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaGraduationCap size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Development Life Skills
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaUserFriends size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Community Group/Centre Activities
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaBrain size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Innovation Community Participation
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaHandHoldingHeart size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Assist Daily Living
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaHandSparkles size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Specialist Positive Behaviour Support
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaClipboardList size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              Assist Co-ord Transition and Supports
            </h4>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <FaUserShield size={64} />
            <h4
              className="mt-2 fs-5 service
          "
            >
              High Intensity Daily Personal Activities
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDISProviderInfo;
