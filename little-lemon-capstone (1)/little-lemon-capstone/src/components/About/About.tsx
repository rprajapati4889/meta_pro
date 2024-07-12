import logo from "../../assets/Asset 9@4x.png";
import "./About.css";

export const About = () => {
  const aboutData = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description:
      "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.",
  };

  return (
    <div className="app_container app_wrapper" id="About">
      <div className="about_header">
        <h1 className="about_header_text">About</h1>
      </div>
      <div className="about">
        <div className="about_detail_box">
          <h1 className="about_title">{aboutData.title}</h1>
          <h4 className="about_subtitle">{aboutData.subTitle}</h4>
          <p className="about_description">{aboutData.description}</p>
        </div>
        <div className="about_image_box">
          <div>
            <img src={logo} alt="header image" width={200} className="about_image"/>
          </div>
        </div>
      </div>
    </div>
  );
};
