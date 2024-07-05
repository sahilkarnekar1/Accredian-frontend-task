import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`rectangle-container ${className}`}>
      <div className="rectangle-div" data-scroll-to="rectangle" />
      <div className="referral-container">
        <div className="referral-header-container">
          <div className="how-do-i-container">
            <span className="how-do-i-container1">
              <span>{`How Do I `}</span>
              <span className="refer1">Refer?</span>
            </span>
          </div>
        </div>
        <div className="referral-description">
          <img className="ai-1-1" alt="" src="/18512590ai-1-1@2x.png" />
          <img
            className="layer-2-0000016665207767825161-icon"
            loading="lazy"
            alt=""
            src="/layer-2-00000166652077678251612620000003541000192939887504.svg"
          />
          <img
            className="layer-10-icon"
            loading="lazy"
            alt=""
            src="/layer-10.svg"
          />
          <img
            className="referral-description-child"
            loading="lazy"
            alt=""
            src="/group-22036.svg"
          />
          <div className="submit-referrals-easily">
            Submit referrals easily via our website’s referral section.
          </div>
          <div className="earn-rewards-once">
            Earn rewards once your referral joins an Accredian program.
          </div>
          <div className="both-parties-receive">
            Both parties receive a bonus 30 days after program enrollment.
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button5">
          <div className="refer-now1">Refer Now</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
