import { useNavigate } from "react-router-dom";

export const Confirmation = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div className="app_container app_wrapper">
      <h1 className="confirm_text">Table Booked successfully!</h1>
      <p>You will be navigated to Home page shortly...</p>
      <div className="loader"></div>
    </div>
  );
};
