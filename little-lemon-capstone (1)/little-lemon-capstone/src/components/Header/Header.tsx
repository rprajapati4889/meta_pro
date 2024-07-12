import "./Header.css";
import headerImage from "../../assets/headerImage.jpg";

export const Header = () => {
  return (
    <div className="app_header app_container app_wrapper">
      <header>
        <div className="app_header_data">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Book a table</button>
        </div>
        <div className="app_header_image">
          <img src={headerImage} alt="header image" width={300} />
        </div>
      </header>
    </div>
  );
};
