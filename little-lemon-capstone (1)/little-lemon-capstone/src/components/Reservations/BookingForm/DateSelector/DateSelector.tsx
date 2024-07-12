import { useRef, useState } from "react";
import "./DateSelector.css";

export const DateSelector = ({
  onChangeDate,
  onChangeOcassion,
  ocassion,
}: {
  onChangeDate: (date: string) => void;
  onChangeOcassion: (ocassion: string) => void;
  ocassion: string;
}) => {
  const ocassions = [
    {
      label: "Birthday",
      value: "birthday",
    },
    {
      label: "Anniversary",
      value: "anniversary",
    },
  ];

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());
  let cafeStatus = "Closed";

  const timeStr = time.toString().split(" ");
  const dateStr = date.toString().split(" ");

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toDateString());
  }, 1000);

  const hour = new Date().toTimeString().split(" ")[0].split(":");

  const startingTime = 8; // 8 AM
  const closoingTime = 21; // 9 PM

  if (parseInt(hour[0]) > startingTime && parseInt(hour[0]) < closoingTime) {
    // console.log('WE are Open!');
    cafeStatus = "Open";
  } else {
    // console.log('WE are closed!');
    cafeStatus = "closed";
  }

  const onDateChange = (e: any) => {
    onChangeDate(e.target.value);
  };

  const onOcassionChange = (e: any) => {
    onChangeOcassion(e.target.value);
  };

  return (
    <div className="date_selector_container">
      <div className="date_selector_date_time">
        <h3 className="selector_title">Today's date : </h3>
        <div className="date_time">
          <div className="date">
            {dateStr[2] + " " + dateStr[1] + " " + dateStr[3]}
          </div>
          <div className="time">{timeStr[0] + " " + timeStr[1]}</div>
        </div>
      </div>
      <div className="choose_date">
        <h3 className="selector_title">Booking date : </h3>
        <input onChange={onDateChange} type="date" className="date_selector" />
        <select
          className="ocassion_selector"
          value={ocassion}
          onChange={onOcassionChange}
        >
          {ocassions.map((ocassion) => {
            return <option value={ocassion.value}>{ocassion.label}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
