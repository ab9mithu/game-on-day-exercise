import "./App.css";
import { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekends"];

function App() {
  const [optionsSelector, setOptionsSelector] = useState("");
  const [daysSelector, setDaysSelector] = useState("");

  const onOptionsChangeHandler = (e) => {
    setOptionsSelector(e.target.value);
  };

  const onDaysChangeHandler = (e) => {
    setDaysSelector(e.target.value);
  };
  return (
    <div>
      <h1> you will play {optionsSelector}</h1>

      <h1>on {daysSelector}</h1>

      <div>
        {options.map((option) => {
          return (
            <div key={option}>
              <input
                onChange={onOptionsChangeHandler}
                required
                type="radio"
                name="options"
                value={option}
              />
              <label>{option}</label>
            </div>
          );
        })}
      </div>
      <br />

      <div>
        {days.map((day) => {
          return (
            <div key={day}>
              <input
                onChange={onDaysChangeHandler}
                required
                type="radio"
                name="days"
                value={day}
              />
              <label>{day}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
