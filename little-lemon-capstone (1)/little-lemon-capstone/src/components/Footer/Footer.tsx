import footerImage from "../../assets/Asset 20@4x.png";
import "./Footer.css";

const FooterItem = ({
  sectionName,
  list,
}: {
  sectionName: string;
  list: string[];
}) => {
  return (
    <div className="footer_item">
      <h1 className="footer_item_title">{sectionName}</h1>
      <ul className="footer_item_names">
        {list.map((listItem: string) => {
          return (
            <li key={listItem}>
              <a href={`#${listItem}`}>{listItem}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Footer = () => {
  const navigation = ["Home", "Menu", "Reviews", "Reservations"];
  const contact = ["Adress", "phone number", "email"];
  const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];
  return (
    <div className="app_footer app_container app_wrapper">
      <footer className="footer_section">
        <img
          src={footerImage}
          alt="footer_image"
          className="footer_image"
        />
        <FooterItem sectionName="Navigation" list={navigation} />
        <FooterItem sectionName="Contact" list={contact} />
        <FooterItem sectionName="Social" list={socialMedia} />
      </footer>
    </div>
  );
};
