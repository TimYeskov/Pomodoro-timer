import logo from "./logo.svg";
import "./App.css";

import Timer from "./Timer";
import PlayButton from "./PlayButton";
import SettingOptions from "./SettingOptions";
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsModal from "./SettingsModal";
import { setOptions } from "./redux/TimerSettings";

function App() {
  const { pomodorroPerDay, pomodorro } = useSelector(
    (state) => state.TimerSettings
  );
  const [options, setOptions] = React.useState(false);
  const handleClose = () => {
    setOptions(!options);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="header">
        <h1 style={{ position: "relative" }} className="pomidorro-timer">
          Pomidorro Timer
        </h1>
        <h1
          onClick={handleClose}
          style={{
            cursor: "pointer",
            zIndex: "1",
            position: "relative",
            // right: "100px",
          }}
        >
          Settings
        </h1>
      </div>
      {options && <SettingsModal options={options} />}
      <main>
        <Timer />
      </main>
      <div className="footer">
        <div
          style={{ position: "relative", zIndex: "-1", bottom: "30px" }}
          className="h1"
        >
          {`${pomodorro} of ${pomodorroPerDay}`} Pomodorro
          {pomodorro >= pomodorroPerDay && `  -Так держать!`}
        </div>
      </div>
    </div>
  );
}

export default App;
