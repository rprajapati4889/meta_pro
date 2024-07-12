import "./TimeSelector.css";

const TimeComponent = ({
  onChangeTime,
  availableTimeSlots,
  time,
}: {
  onChangeTime: (time: string) => void;
  availableTimeSlots: any;
  time: string;
}) => {
  const onChangeHandler = (e: any) => {
    onChangeTime(e.target.value);
  };

  return (
    <div>
      <h3>Time slots : {time}</h3>
      <div className="timeslots">
        {availableTimeSlots.map((timeslot: any) => {
          return (
            <span className="slot_box">
              <label htmlFor={timeslot} className="slot_label">
                <input
                  type="radio"
                  name="timeslots-m"
                  id={timeslot}
                  value={timeslot}
                  onChange={onChangeHandler}
                />
                {timeslot}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const TimeSelector = ({
  onChangeTime,
  availableTimeSlots,
}: {
  onChangeTime: (time: string) => void;
  availableTimeSlots: any;
}) => {
  const hour = new Date().toTimeString().split(" ")[0].split(":");

  let isMorning = false;
  let isAfternoon = false;
  let isEvening = false;

  if (Number(hour[0]) >= 9 && Number(hour[0]) < 12) {
    isMorning = true;
    isAfternoon = false;
    isEvening = false;
  } else if (Number(hour[0]) >= 12 && Number(hour[0]) < 16) {
    isMorning = false;
    isAfternoon = true;
    isEvening = false;
  } else if (Number(hour[0]) >= 16 && Number(hour[0]) < 21) {
    isMorning = false;
    isAfternoon = false;
    isEvening = true;
  }

  return (
    <div className="time_selector">
      {(isMorning && (
        <TimeComponent
          onChangeTime={onChangeTime}
          availableTimeSlots={availableTimeSlots.morning}
          time="Morning"
        />
      )) ||
        (isAfternoon && (
          <TimeComponent
            onChangeTime={onChangeTime}
            availableTimeSlots={availableTimeSlots.afternoon}
            time="Afternoon"
          />
        )) ||
        (isEvening && (
          <TimeComponent
            onChangeTime={onChangeTime}
            availableTimeSlots={availableTimeSlots.evening}
            time="Evening"
          />
        ))}
    </div>
  );
};
