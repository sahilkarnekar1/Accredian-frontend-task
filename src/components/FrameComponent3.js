import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const onBenefitsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFAQsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSupportTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ctaCircled94f7e66bfe364d78b6']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`refer-earn-page-inner ${className}`}>
      <div className="anniversary-container-parent">
        <div className="anniversary-container">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="refer-parent">
              <div className="refer">Refer</div>
              <div className="ellipse-wrapper">
                <div className="frame-item" />
              </div>
            </div>
            <div className="benefits" onClick={onBenefitsTextClick}>
              Benefits
            </div>
            <div className="faqs" onClick={onFAQsTextClick}>
              FAQs
            </div>
            <div className="support" onClick={onSupportTextClick}>
              Support
            </div>
          </div>
        </div>
        <div className="learn-earn-container">
          <div className="rectangle-group">
            <div className="frame-inner" />
            <div className="learn-earn-content">
              <div className="content-wrapper">
                <img
                  className="anniversary-8-4"
                  loading="lazy"
                  alt=""
                  src="/anniversary-8-4@2x.png"
                />
                <div className="lets-learn-earn-wrapper">
                  <h1 className="lets-learn">{`Let’s Learn & Earn`}</h1>
                </div>
                <div className="chance-container">
                  <div className="get-a-chance-container">
                    <span>
                      <p className="get-a-chance">{`Get a chance to win `}</p>
                      <p className="up-to-rs-15000">
                        <span>{`up-to `}</span>
                        <b className="rs-15000">Rs. 15,000</b>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="refer-now-button-container">
                  <button className="button4">
                    <div className="refer-now">Refer Now</div>
                  </button>
                </div>
              </div>
              <img
                className="anniversary-8-2"
                loading="lazy"
                alt=""
                src="/anniversary-8-2@2x.png"
              />
            </div>
            <div className="anniversary-8-5-parent">
              <img
                className="anniversary-8-5"
                loading="lazy"
                alt=""
                src="/anniversary-8-5@2x.png"
              />
              <div className="anniversary-8-3-wrapper">
                <img
                  className="anniversary-8-3"
                  loading="lazy"
                  alt=""
                  src="/anniversary-8-3@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="anniversary-7-1-parent">
            <img
              className="anniversary-7-1"
              alt=""
              src="/anniversary-7-1@2x.png"
            />
            <img
              className="anniversary-8-1"
              loading="lazy"
              alt=""
              src="/anniversary-8-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
