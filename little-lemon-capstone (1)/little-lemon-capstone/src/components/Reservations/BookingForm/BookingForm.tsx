import { Dispatch, useState } from "react";
import { GuestSelector } from "./GuestSelector/GuestSelector";
import { DateSelector } from "./DateSelector/DateSelector";
import { TimeSelector } from "./TimeSelector/TimeSelector";

export const BookingForm = ({
  submitReservation,
  availableTimeSlots,
  dispatchTimeSlotsOnDateChange,
}: {
  submitReservation: (reservations: any) => void;
  availableTimeSlots: any;
  dispatchTimeSlotsOnDateChange: Dispatch<string | number | Date>;
}) => {
  const [time, setTime] = useState("00:00");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [ocassion, setOccasion] = useState("birthday");
  const [reservation, setReservation] = useState({
    guests: guests,
    date: "",
    time: "",
    ocassion: ocassion,
  });

  const onChangeTime = (time: string) => {
    setTime(time);
    setReservation({ ...reservation, time: time });
  };

  const onChangeGuests = (guest: number) => {
    setGuests(guest);
    setReservation({ ...reservation, guests: guest });
  };

  const onChangeDate = (date: string) => {
    setDate(date);
    setReservation({ ...reservation, date: date });
  };

  const onChangeOcassion = (ocassion: string) => {
    setOccasion(ocassion);
    setReservation({ ...reservation, ocassion: ocassion });
  };

  const onSubmitReservation = (e: any) => {
    console.log("details :: ", reservation);
    e.preventDefault();
    if (
      reservation.date &&
      reservation.guests &&
      reservation.ocassion &&
      reservation.time
    ) {
      submitReservation(reservation);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitReservation}>
        <GuestSelector onChangeGuests={onChangeGuests} />
        <DateSelector
          onChangeDate={onChangeDate}
          onChangeOcassion={onChangeOcassion}
          ocassion={ocassion}
        />
        <TimeSelector
          onChangeTime={onChangeTime}
          availableTimeSlots={availableTimeSlots}
        />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
