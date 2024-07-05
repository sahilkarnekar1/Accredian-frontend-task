import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`f-a-q-content-wrapper ${className}`}>
      <div className="f-a-q-content">
        <div className="f-a-q-container">
          <div
            className="f-a-q-title-container-parent"
            data-scroll-to="groupContainer"
          >
            <div className="f-a-q-title-container">
              <div className="frequently-asked-questions-container">
                <span>{`Frequently Asked `}</span>
                <span className="questions">Questions</span>
              </div>
            </div>
            <div className="f-a-q-list">
              <div className="f-a-q-items">
                <button className="f-a-q-item-content">
                  <div className="f-a-q-item-content-child" />
                  <div className="heading-11">Eligibility</div>
                </button>
                <div className="f-a-q-item-content1">
                  <div className="heading-12">How to Use?</div>
                  <div className="f-a-q-item-content-item" />
                </div>
                <div className="f-a-q-item-content2">
                  <div className="heading-13">{`Terms & Conditions`}</div>
                  <div className="f-a-q-item-content-inner" />
                </div>
              </div>
              <div className="prior-management">
                <div className="prior-management-content">
                  <div className="prior-mgmt-box">
                    <div className="prior-mgmt-question">
                      <div className="heading-14">
                        Do I need to have prior Product Management and Project
                        Management experience to enroll in the program?
                      </div>
                      <div className="svg-wrapper1">
                        <img className="svg-icon9" alt="" src="/svg-9.svg" />
                      </div>
                    </div>
                    <div className="prior-mgmt-answer">
                      <div className="no-the-program-container">
                        <p className="no-the-program">
                          No, the program is designed to be inclusive of all
                          levels of experience. All topics will be covered from
                          the basics, making it
                        </p>
                        <p className="suitable-for-individuals">
                          suitable for individuals from any field of work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="system-config">
                    <div className="heading-15">
                      What is the minimum system configuration required?
                    </div>
                    <div className="svg-wrapper2">
                      <img className="svg-icon10" alt="" src="/svg-10.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divcta-grad">
          <img
            className="cta-circled94f7e66bfe364d78b6-icon"
            alt=""
            src="/ctacircled94f7e66bfe364d78b6esvg-fill.svg"
            data-scroll-to="ctaCircled94f7e66bfe364d78b6"
          />
          <div className="contact-content">
            <img
              className="divw-20-icon"
              loading="lazy"
              alt=""
              src="/divw20.svg"
            />
            <div className="heading-1-want-to-delve-deep-parent">
              <h3 className="heading-16">
                Want to delve deeper into the program?
              </h3>
              <div className="heading-4">
                Share your details to receive expert insights from our program
                team!
              </div>
            </div>
          </div>
          <div className="inquiry-button">
            <button className="button7">
              <div className="get-in-touch">Get in touch</div>
              <div className="get-in-touch-icon">
                <img className="svg-icon11" alt="" src="/svg-11.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
