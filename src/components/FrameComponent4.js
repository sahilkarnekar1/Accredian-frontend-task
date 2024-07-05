import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/");
  }, []);

  const onLinkClick = useCallback(() => {
    window.open("https://home.accredian.com/login");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://trial.accredian.com/");
  }, []);

  return (
    <header className={`container-wrapper ${className}`}>
      <div className="container">
        <div className="container1">
          <div className="container2">
            <div className="link" onClick={onLinkContainerClick}>
              <img
                className="logopng-icon"
                loading="lazy"
                alt=""
                src="/logopng@2x.png"
              />
            </div>
            <div className="container3">
              <div className="button1">
                <a className="courses">Courses</a>
                <img className="svg-icon" alt="" src="/svg.svg" />
              </div>
            </div>
          </div>
          <div className="container4">
            <div className="heading-2-dialog">
              <div className="refer-earn">{`Refer & Earn`}</div>
            </div>
            <div className="container5">
              <div className="heading-2-dialog1">
                <div className="resources">Resources</div>
              </div>
              <div className="heading-2-dialog2">
                <a className="about-us">About us</a>
              </div>
            </div>
            <div className="container6">
              <button className="link1" onClick={onLinkClick}>
                <div className="button2">
                  <a className="login">Login</a>
                </div>
              </button>
              <div className="link2" onClick={onLinkContainerClick1}>
                <div className="button3">
                  <a
                    className="try-for-free"
                    href="https://trial.accredian.com/"
                    target="_blank"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
