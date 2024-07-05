import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/whyaccredian");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.facebook.com/insaidlearn");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.linkedin.com/school/insaid/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://twitter.com/insaidlearn");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.instagram.com/insaid.learn/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://home.accredian.com/About");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://home.accredian.com/Career");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://blog.accredian.com/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://home.accredian.com/policies/accredian-policy");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://home.accredian.com/terms/referral");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://home.accredian.com/terms/privacy");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://home.accredian.com/terms");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("https://home.accredian.com/Faq");
  }, []);

  return (
    <footer className={`background1 ${className}`}>
      <div className="container7">
        <div className="container8">
          <div className="container9">
            <img
              className="accredainnewwebp-icon"
              loading="lazy"
              alt=""
              src="/accredainnewwebp@2x.png"
            />
          </div>
          <div className="container10">
            <button className="button8">
              <div className="schedule-1-on-1-call">
                Schedule 1-on-1 Call Now
              </div>
            </button>
            <div className="container11">
              <div className="speak-with-our">
                Speak with our Learning Advisor
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container12">
            <div className="separator" />
            <div className="margin">
              <div className="container13">
                <div className="program-links">
                  <div className="programs">Programs</div>
                </div>
                <div className="program-buttons1">
                  <div className="container14">
                    <div className="button9">
                      <div className="margin1">
                        <div className="container15">
                          <div className="container16">
                            <b className="data-science1">{`Data Science & AI`}</b>
                          </div>
                        </div>
                      </div>
                      <div className="container17">
                        <img className="svg-icon12" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container18">
                    <div className="button10">
                      <div className="margin2">
                        <div className="container19">
                          <div className="container20">
                            <b className="product-management">
                              Product Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container21">
                        <img className="svg-icon13" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container22">
                    <div className="button11">
                      <div className="margin3">
                        <div className="container23">
                          <div className="container24">
                            <b className="business-analytics1">
                              Business Analytics
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container25">
                        <img className="svg-icon14" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container26">
                    <div className="button12">
                      <div className="margin4">
                        <div className="container27">
                          <div className="container28">
                            <b className="digital-transformation2">
                              Digital Transformation
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container29">
                        <img className="svg-icon15" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container30">
                    <div className="button13">
                      <div className="margin5">
                        <div className="container31">
                          <div className="container32">
                            <b className="business-management2">
                              Business Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container33">
                        <img className="svg-icon16" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container34">
                    <div className="button14">
                      <div className="margin6">
                        <div className="container35">
                          <div className="container36">
                            <b className="project-management">
                              Project Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container37">
                        <img className="svg-icon17" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container38">
                    <div className="button15">
                      <div className="margin7">
                        <div className="container39">
                          <div className="container40">
                            <b className="strategy-leadership">{`Strategy & Leadership`}</b>
                          </div>
                        </div>
                      </div>
                      <div className="container41">
                        <img className="svg-icon18" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container42">
                    <div className="button16">
                      <div className="margin8">
                        <div className="container43">
                          <div className="container44">
                            <b className="senior-management1">
                              Senior Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="container45">
                        <img className="svg-icon19" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="container46">
                    <div className="button17">
                      <div className="margin9">
                        <div className="container47">
                          <div className="container48">
                            <b className="fintech1">Fintech</b>
                          </div>
                        </div>
                      </div>
                      <div className="container49">
                        <img className="svg-icon20" alt="" src="/svg-12.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="margin10">
              <div className="container50">
                <div className="contact-us">Contact Us</div>
                <div className="list">
                  <div className="item">
                    <div className="container51">
                      <a
                        className="link-email"
                        href="mailto:admissions@accredian.com"
                        target="_blank"
                      >
                        Email us (For Data Science Queries):
                        admissions@accredian.com
                      </a>
                    </div>
                  </div>
                  <div className="item1">
                    <div className="container52">
                      <a
                        className="link-email1"
                        href="mailto:pm@accredian.com"
                        target="_blank"
                      >
                        Email us (For Product Management
                        Queries):pm@accredian.com
                      </a>
                    </div>
                  </div>
                  <div className="item2">
                    <div className="container53">
                      <div className="link-data">
                        Data Science Admission Helpline:+91 9079653292 (9 AM - 7
                        PM)
                      </div>
                    </div>
                  </div>
                  <div className="item3">
                    <div className="container54">
                      <div className="link-product">
                        Product Management Admission Helpline:+91 9625811095
                      </div>
                    </div>
                  </div>
                  <div className="item4">
                    <div className="container55">
                      <div className="link-enrolled">
                        Enrolled Student Helpline: +91 7969322507
                      </div>
                    </div>
                  </div>
                  <div className="item5">
                    <div className="container56">
                      <div className="office-address-4th-container">
                        <p className="office-address-4th">
                          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                          Sector 18, Gurugram,
                        </p>
                        <p className="haryana-122015">Haryana 122015</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="link3" onClick={onLinkContainerClick}>
                  <a
                    className="why-accredian"
                    href="https://home.accredian.com/whyaccredian"
                    target="_blank"
                  >
                    Why Accredian
                  </a>
                </div>
                <div className="follow-us">Follow Us</div>
                <div className="social-links">
                  <div className="link4" onClick={onLinkContainerClick1}>
                    <img className="svg-icon21" alt="" src="/svg-21.svg" />
                  </div>
                  <div className="link5" onClick={onLinkContainerClick2}>
                    <img className="svg-icon22" alt="" src="/svg-22.svg" />
                  </div>
                  <div className="more-social-links">
                    <div className="link6" onClick={onLinkContainerClick3}>
                      <img
                        className="more-social-link-content"
                        loading="lazy"
                        alt=""
                        src="/frame.svg"
                      />
                    </div>
                    <div className="link7" onClick={onLinkContainerClick4}>
                      <img className="svg-icon23" alt="" src="/svg-23.svg" />
                    </div>
                    <div className="link8" onClick={onLinkContainerClick5}>
                      <img className="svg-icon24" alt="" src="/svg-24.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="margin11">
              <div className="container57">
                <div className="container58">
                  <div className="container59">
                    <div className="accredian">Accredian</div>
                  </div>
                  <div className="list1">
                    <div className="item6">
                      <div className="link9" onClick={onLinkContainerClick6}>
                        <a className="about">About</a>
                      </div>
                    </div>
                    <div className="item7">
                      <div className="link10" onClick={onLinkContainerClick7}>
                        <a
                          className="career"
                          href="https://home.accredian.com/Career"
                          target="_blank"
                        >
                          Career
                        </a>
                      </div>
                    </div>
                    <div className="item8">
                      <div className="link11" onClick={onLinkContainerClick8}>
                        <a
                          className="blog"
                          href="https://blog.accredian.com/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                    <div className="item9">
                      <div className="link12" onClick={onLinkContainerClick9}>
                        <a
                          className="admission-policy"
                          href="https://home.accredian.com/policies/accredian-policy"
                          target="_blank"
                        >
                          Admission Policy
                        </a>
                      </div>
                    </div>
                    <div className="item10">
                      <div className="link13" onClick={onLinkContainerClick10}>
                        <a
                          className="referral-policy"
                          href="https://home.accredian.com/terms/referral"
                          target="_blank"
                        >
                          Referral Policy
                        </a>
                      </div>
                    </div>
                    <div className="item11">
                      <div className="link14" onClick={onLinkContainerClick11}>
                        <a className="privacy-policy">Privacy Policy</a>
                      </div>
                    </div>
                    <div className="item12">
                      <div className="link15" onClick={onLinkContainerClick12}>
                        <a className="terms-of-service">Terms Of Service</a>
                      </div>
                    </div>
                    <div className="item13">
                      <div className="link16" onClick={onLinkContainerClick13}>
                        <a
                          className="master-faqs"
                          href="https://home.accredian.com/Faq"
                          target="_blank"
                        >
                          Master FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accredian-a-brand-of-fullstack-wrapper">
            <div className="accredian-a-brand">
              © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <div className="footer-icon">
        <img className="svg-icon25" alt="" src="/svg-25.svg" />
      </div>
    </footer>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
