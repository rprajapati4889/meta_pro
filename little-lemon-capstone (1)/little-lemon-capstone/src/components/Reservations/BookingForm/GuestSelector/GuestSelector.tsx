import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./GuestSelector.css";

export const GuestSelector = ({
  onChangeGuests,
}: {
  onChangeGuests: (guest: number) => void;
}) => {
  const [guest, setGuest] = useState(1);
  const [warning, setWarning] = useState(false);

  const decrease = () => {
    if (guest > 1) {
      setWarning(false);
      setGuest(guest - 1);
      onChangeGuests(guest - 1);
    } else {
      setWarning(true);
    }
  };

  const increase = () => {
    if (guest < 6) {
      setWarning(false);
      setGuest(guest + 1);
      onChangeGuests(guest + 1);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="guest_selector">
      <h3 className="selector_title">Guest :</h3>
      <div className="guest_counter">
        <FaMinus onClick={decrease} />
        <pre>{guest}</pre>
        <FaPlus onClick={increase} />
      </div>
      <div className="guest_counter_box">
        {warning && (
          <span style={{ fontSize: 16, color: "red" }}>
            Guests must be between 1 to 6
          </span>
        )}
      </div>
    </div>
  );
};
