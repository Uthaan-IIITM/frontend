import React from "react";
import TextComponent from "../../_general/TextComponent";
import "../../../styles/home/lower-section/HomeLowerSection.css";
import DirectorImageComponent from "./DirectorImageComponent";
import DirectorImage from "../../../assets/home/prof_rajendra_sahu.jpg";

const HomeLowerSectionContent =
  "Uthaan is journalism and recreational forum of the institute, by the students for the students. This forum has been formed in order to enable all round development of the students in all facets of life. Our aim is to develop and nurture every sort of quality in the students. It is a forum which serves as a bridge between academics and student welfare. We are the eyes and ears of the institute, when it comes to any event occurring inside it, We cover the events through all forms of media.";
const HomeLowerSectionMaintextStyle = {
  fontWeight: "normal",
  color: "#222222",
  textAlign: "center",
};

const HomeLowerSectionDirectorContent =
  "Uthaan is a bridge between academics and students' welfare. It exposes the students to the outerworld by giving them a platform to interact with the players in professional fields.It is a forum that promotes all round development";
const HomeLowerSectionDirectorContentStyle = {
  fontWeight: "500",
  color: "#222222",
};

function HomeLowerSection() {
  return (
    <div>
      <div className="home-lower-section-main-text">
        <TextComponent
          innerContent={HomeLowerSectionContent}
          textComponentStyle={HomeLowerSectionMaintextStyle}
        />
      </div>

      <div className="home-lower-section-director-section">
        <div>
          <DirectorImageComponent ImgSource={DirectorImage} />
        </div>
        <div className="home-lower-section-director-section-content">
          <h2> Prof. Rajendra Sahu </h2>
          <h2> Director ABV-IIITM / Faculty Co-ordinator </h2>
          <div>
            <TextComponent
              innerContent={HomeLowerSectionDirectorContent}
              textComponentStyle={HomeLowerSectionDirectorContentStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLowerSection;
