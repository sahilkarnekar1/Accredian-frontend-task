import PropTypes from "prop-types";
import "./FrameComponent1.css";
import React, { useState } from 'react';
import ReferModal from './ReferModal';

const FrameComponent1 = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className={`benefits-container-wrapper ${className}`}>
      <div className="benefits-container">
        <div className="benefits-content">
          <div className="benefits-header-container">
            <div className="what-are-the-container">
              <span className="what-are-the-container1">
                <span>{`What Are The `}</span>
                <span className="referral-benefits">Referral Benefits?</span>
              </span>
            </div>
          </div>
          <div className="program-buttons">
            <div className="program-buttons-row-one">
              <div className="all-program-button-container">
                <div className="all-program-button">
                  <div className="all-program-button-child" />
                  <div className="button-all">ALL PROGRAMS</div>
                  <div className="all-program-icon-container">
                    <img className="svg-icon1" alt="" src="/svg-1.svg" />
                  </div>
                </div>
                <div className="program-cards-container">
                  <div className="program-cards-container-child" />
                  <div className="job-assured-container">
                    <div className="button-job">Product Management</div>
                    <div className="job-assured-icon-container">
                      <img className="svg-icon2" alt="" src="/svg-2.svg" />
                    </div>
                  </div>
                  <div className="program-buttons-row-two">
                    <div className="inner-container-parent">
                      <div className="inner-container">
                        <img
                          className="inner-container-child"
                          alt=""
                          src="/line-401.svg"
                        />
                      </div>
                      <div className="button-online-degree-program-parent">
                        <div className="button-online">{`Strategy & Leadership`}</div>
                        <div className="svg-wrapper">
                          <img className="svg-icon3" alt="" src="/svg-2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="program-card-row-one">
                    <img
                      className="program-card-row-one-child"
                      alt=""
                      src="/line-402.svg"
                    />
                  </div>
                  <div className="business-management">
                    <div className="business-management-wrapper">
                      <div className="business-management1">
                        Business Management
                      </div>
                    </div>
                    <img className="svg-icon4" alt="" src="/svg-4.svg" />
                  </div>
                  <div className="program-card-row-one1">
                    <div className="program-card-row-one-inner">
                      <img className="line-icon" alt="" src="/line-402.svg" />
                    </div>
                    <div className="program-card-two-and-three">
                      <div className="fintech-card">
                        <div className="fintech">Fintech</div>
                      </div>
                      <img className="svg-icon5" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                  <div className="program-card-row-one2">
                    <div className="frame-parent">
                      <div className="senior-management-parent">
                        <div className="senior-management">
                          Senior Management
                        </div>
                        <div className="senior-management-icon-contain">
                          <img className="svg-icon6" alt="" src="/svg-5.svg" />
                        </div>
                      </div>
                      <img
                        className="frame-child1"
                        alt=""
                        src="/line-402.svg"
                      />
                    </div>
                  </div>
                  <div className="program-card-row-one3">
                    <img
                      className="program-card-row-one-item"
                      alt=""
                      src="/line-402.svg"
                    />
                  </div>
                  <div className="program-card-row-one4">
                    <div className="data-science">Data Science</div>
                    <div className="svg-container">
                      <img className="svg-icon7" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                  <div className="program-card-row-one5">
                    <img
                      className="program-card-row-one-child1"
                      alt=""
                      src="/line-402.svg"
                    />
                  </div>
                  <div className="digital-transformation">
                    <div className="digital-transformation1">
                      Digital Transformation
                    </div>
                    <div className="digital-trans-icon-wrapper">
                      <img
                        className="digital-trans-icon"
                        alt=""
                        src="/digital-trans-icon.svg"
                      />
                    </div>
                  </div>
                  <div className="program-card-row-one6">
                    <img
                      className="program-card-row-one-child2"
                      alt=""
                      src="/line-402.svg"
                    />
                  </div>
                  <div className="program-card-row-one7">
                    <div className="business-analytics">Business Analytics</div>
                    <div className="svg-frame">
                      <img className="svg-icon8" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="enrolled-programs">
              <div className="enrolled-programs-content">
                <div className="enrolled">Enrolled</div>
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="frame-child2" />
                </div>
              </div>
              <div className="program-list">
                <div className="program-list-content">
                  <div className="program-list-container">
                    <div className="program-list-container1">
                      <div className="program-list-container-child" />
                      <div className="program-table">
                        <div className="program-table-header">
                          <div className="program-table-header-cells">
                            <img
                              className="group-icon"
                              loading="lazy"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="professional-certificate-progr">
                            Professional Certificate Program in Product
                            Management
                          </div>
                        </div>
                        <div className="program-table-header1">
                          <div className="group-wrapper">
                            <img
                              className="group-icon1"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="pg-certificate-program">
                            PG Certificate Program in Strategic Product
                            Management
                          </div>
                        </div>
                        <div className="program-table-header2">
                          <div className="group-container">
                            <img
                              className="group-icon2"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="executive-program-in">
                            Executive Program in Data Driven Product Management
                          </div>
                        </div>
                        <div className="program-table-header3">
                          <div className="group-frame">
                            <img
                              className="group-icon3"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="executive-program-in1">
                            Executive Program in Product Management and Digital
                            Transformation
                          </div>
                        </div>
                        <div className="program-table-header4">
                          <div className="frame-div">
                            <img
                              className="group-icon4"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="executive-program-in2">
                            Executive Program in Product Management
                          </div>
                        </div>
                        <div className="program-table-header5">
                          <div className="group-wrapper1">
                            <img
                              className="group-icon5"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="advanced-certification-in">
                            Advanced Certification in Product Management
                          </div>
                        </div>
                        <div className="program-table-header6">
                          <div className="group-wrapper2">
                            <img
                              className="group-icon6"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                          <div className="executive-program-in3">
                            Executive Program in Product Management and Project
                            Management
                          </div>
                        </div>
                      </div>
                      <div className="program-prices">
                        <div className="program-prices-content">
                          <div className="program-prices-box">
                            <div className="program-prices-list">
                              <div className="div">₹ 7,000</div>
                              <div className="div1">₹ 9,000</div>
                              <div className="div2">₹ 10,000</div>
                              <div className="div3">₹ 10,000</div>
                              <div className="div4">₹ 10,000</div>
                              <div className="div5">₹ 10,000</div>
                              <div className="div6">₹ 10,000</div>
                            </div>
                          </div>
                          <div className="referrer-prices">
                            <div className="div7">₹ 9,000</div>
                            <div className="div8">₹ 11,000</div>
                            <div className="div9">₹ 10,000</div>
                            <div className="div10">₹ 10,000</div>
                            <div className="div11">₹ 10,000</div>
                            <div className="div12">₹ 10,000</div>
                            <div className="div13">₹ 10,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-assured-row">
                    <div className="job-assured-row-child" />
                    <b className="cell-job">Programs</b>
                    <div className="referral-bonus">
                      <div className="referral-bonus-content">
                        <b className="referrer-bonus">Referrer Bonus</b>
                        <div className="referee-bonus">
                          <b className="referee-bonus1">Referee Bonus</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlayborder">
                  <div className="show-more">Show More</div>
                  <div className="show-more-icon">
                    <img
                      className="chevron-upsvg-icon"
                      alt=""
                      src="/chevronupsvg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="refer-now-button-container1">
          <button onClick={openModal} className="button6">
            <div className="refer-now2">Refer Now</div>
          </button>
          <ReferModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
