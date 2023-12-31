import React, { useState, useEffect } from "react";

const BookingForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    const isFormValid = selectedDate && selectedTime && guests >= 1 && guests <= 10 && occasion;
    setFormIsValid(isFormValid);
  }, [selectedDate, selectedTime, guests, occasion]);

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", { selectedDate, selectedTime, guests, occasion });
  };

  return (
    <div className="form">
      <h1>Make Your Reservations</h1>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          disabled={!formIsValid}
        />
      </form>
    </div>
  );
};

export default BookingForm;

