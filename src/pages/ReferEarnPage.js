import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Background from "../components/Background";
import "./ReferEarnPage.css";

const ReferEarnPage = () => {
  return (
    <div className="refer-earn-page">
      <div className="background">
        <div className="overlay">
          <div className="heading-1">
            <div className="navigate-your-ideal">
              Navigate your ideal career path with tailored expert advice
            </div>
            <div className="buttonmargin">
              <div className="button">
                <a className="contact-expert">contact expert</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <div className="refer-earn-page-child" />
      <div className="refer-earn-page-item" />
      <FrameComponent1 />
      <FrameComponent />
      <Background />
    </div>
  );
};

export default ReferEarnPage;
