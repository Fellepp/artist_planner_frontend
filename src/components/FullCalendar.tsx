import React from "react";
import FullCalendarGrid from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getConcertsGlobal, getConcertsByContinent, getConcertsByCountry, getConcertsByCity, getConcertsByArtist, getConcertsByContinentAndArtist } from "../models";

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
        //events={() => getConcertsGlobal()}
        events={() => getConcertsByContinent("/continent", "Europe")}
      />
    </div>
  );
};

export default FullCalendar;
