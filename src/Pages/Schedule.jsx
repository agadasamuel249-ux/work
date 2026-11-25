import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Schedule() {
  const schedule = {
    Sunday: [
      { time: "09:00 - 10:00", className: "Yoga", trainer: "John Doe" },
      { time: "10:00 - 11:00", className: "Cardio Blast", trainer: "Jane Smith" },
      { time: "11:00 - 12:00", className: "Crossfit", trainer: "Adam Lee" },
    ],
    Monday: [
      { time: "08:00 - 09:00", className: "Pilates", trainer: "Sarah James" },
      { time: "09:00 - 10:00", className: "Zumba", trainer: "Nina Brown" },
      { time: "10:00 - 11:00", className: "Strength Training", trainer: "Marcus Holt" },
    ],
    Tuesday: [
      { time: "07:00 - 08:00", className: "HIIT", trainer: "Daniel Cruz" },
      { time: "09:00 - 10:00", className: "Boxing", trainer: "Tyler Wood" },
      { time: "10:00 - 11:00", className: "Cycling", trainer: "Amy Walker" },
    ],
    Wednesday: [
      { time: "08:00 - 09:00", className: "Core Fitness", trainer: "Emma White" },
      { time: "10:00 - 11:00", className: "Flexibility", trainer: "Lucas King" },
      { time: "11:00 - 12:00", className: "Cardio Burn", trainer: "Chloe Hart" },
    ],
    Thursday: [
      { time: "07:00 - 08:00", className: "Strength Training", trainer: "Eric Lane" },
      { time: "08:00 - 09:00", className: "Yoga", trainer: "Sophie Kim" },
      { time: "09:00 - 10:00", className: "Kickboxing", trainer: "Tony Rivers" },
    ],
    Friday: [
      { time: "08:00 - 09:00", className: "Bootcamp", trainer: "Robert Mills" },
      { time: "10:00 - 11:00", className: "Zumba", trainer: "Paula Stones" },
      { time: "11:00 - 12:00", className: "Cycling", trainer: "Olivia Cross" },
    ],
    Saturday: [
      { time: "07:00 - 08:00", className: "Crossfit", trainer: "Adam Lee" },
      { time: "09:00 - 10:00", className: "Pilates", trainer: "Sarah James" },
      { time: "10:00 - 11:00", className: "Cardio Blast", trainer: "Nina Brown" },
    ],
  };

  return (
    <>
    <section className="schedule-hero">
      <div className="schedule-overlay"> </div>
      <div className="schedule-hero-text">
        <p className="schedule-first-text"> Schedule</p>
        <p className="schedule-second-text">
          <Link to= "/">Home</Link> <span>/Schedule</span>

        </p>

      </div>

    </section>

    <section className="schedule-section">
     
      <div className="schedule-container">

        {Object.entries(schedule).map(([day, sessions]) => (
          <div className="schedule-day" key={day}>
            <div className="day-header">{day}</div>

            {sessions.map((item, index) => (
              <div className="schedule-item" key={index}>
                <p className="time">{item.time}</p>
                <p className="class">{item.className}</p>
                <p className="trainer">{item.trainer}</p>
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>

    <section className="cta-contact">
              <h2>Ready to take the first step towards your fitness goals?</h2>
              <button className="cta-contact-btn start-slide">
                <Link to="/join">JOIN NOW</Link></button>
     </section>
    
    
    
    </>
    
  );
}
