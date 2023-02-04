import React, { useState } from "react";
import FullCalendarGrid from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getConcertsByCity, getConcertsGlobal } from "../models";

const FullCalendar = () => {
  return (
    <div className="m-4">
      <FullCalendarGrid
        initialView="dayGridMonth"
        headerToolbar={{
          left: "dayGridDay, dayGridWeek, dayGridMonth",
          center: "title",
        }}
        themeSystem="standard"
        plugins={[dayGridPlugin]}
        //events={() => getConcertsByCity(cityEndpoint, city)}
        events={() => getConcertsGlobal()}
      />
    </div>
  );
};

export default FullCalendar;
