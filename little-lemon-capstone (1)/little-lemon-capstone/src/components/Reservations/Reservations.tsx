import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../utils/API";
import { useNavigate } from "react-router-dom";
import { BookingForm } from "./BookingForm/BookingForm";
import "./Reservations.css";

const updateTimeSlots = (
  availableTimeSlots: any,
  date: string | number | Date
) => {
  const response = fetchAPI(new Date(date));

  return response.morning.length !== 0 &&
    response.afternoon.length !== 0 &&
    response.evening.length !== 0
    ? response
    : availableTimeSlots;
};

const initTimeSlots = (initAvaliableTimeSlots: {
  morning: any;
  afternoon: any;
  evening: any;
}) => {
  // return [...initAvaliableTimeSlots, ...fetchAPI(new Date())];
  return {
    morning: [
      ...initAvaliableTimeSlots.morning,
      ...fetchAPI(new Date()).morning,
    ],
    afternoon: [
      ...initAvaliableTimeSlots.afternoon,
      ...fetchAPI(new Date()).afternoon,
    ],
    evening: [
      ...initAvaliableTimeSlots.evening,
      ...fetchAPI(new Date()).evening,
    ],
  };
};

export const Reservations = () => {
  const [availableTimeSlots, dispatchTimeslotsOnDateChange] = useReducer(
    updateTimeSlots,
    { morning: [], afternoon: [], evening: [] },
    initTimeSlots
  );

  const navigate = useNavigate();

  // Handler Function to submit the reservation data to the server
  const submitReservation = (reservation: any) => {
    console.log("Reservation From Data: ", reservation);
    const response = submitAPI(reservation);

    const confrimPageMap = new Map();
    confrimPageMap.set("confirmedBooking", {
      name: "Confirmed Booking",
      path: "/ConfirmedBooking",
      anchorable: true,
    });

    if (response) {
      // alert("Data Submitted Successfully");
      navigate(confrimPageMap.get("confirmedBooking").path);
    } else {
      alert("Data Submission Failed");
    }
  };
  return (
    <div className="reservation_container reservation_wrapper">
      <BookingForm
        submitReservation={submitReservation}
        availableTimeSlots={availableTimeSlots}
        dispatchTimeSlotsOnDateChange={dispatchTimeslotsOnDateChange}
      />
    </div>
  );
};
