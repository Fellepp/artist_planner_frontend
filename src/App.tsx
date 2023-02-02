import React, { useEffect } from "react";
import FullCalendar from "./components/FullCalendar";
import "./App.css";
import "./index.css";

import { getConcertsByCity, getConcertsGlobal } from "./models";
import { Dropdown } from "./components/Dropdown";

const cityEndpoint = "/city";
const city = "Oslo";

function App() {
  return (
    <div className="App">
      <div>
        <Dropdown />
        <FullCalendar />
      </div>
    </div>
  );
}

export default App;
