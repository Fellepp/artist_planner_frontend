import React, { useEffect } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getConcertsByCity, getConcertsGlobal } from "./models"

const cityEndpoint = "/city"
const city = "Oslo"

function App() {
  return (
    <div className="App">
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: "",
          center: "title",
        }}
        themeSystem="standard"
        plugins={[dayGridPlugin]}
        //events={() => getConcertsByCity(cityEndpoint, city)}
        events={() => getConcertsGlobal()}
      />
    </div>
  );
}

export default App;