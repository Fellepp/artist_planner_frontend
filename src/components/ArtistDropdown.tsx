// import { useState } from "react";
// import { listenerCount } from "process";
// import React from "react";
// import ReactDropdown from "react-dropdown";
// import { getConcertsByArtist } from "../models/models";
// import FullCalendarGrid from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// const artists: string[] = ["All artists"];

const getArtists = (data: any) => {
//   data.forEach((concert: any) => {
//     if (!artists?.includes(concert.artist)) {
//       artists.push(concert.artist);
//     }
//   });
// };
// const ArtistDropdown = () => {
//   const [artistDropdown, setArtistDropdown] = useState("");
//   const [artistConcerts, setartistConcerts] = useState([]);
//   console.log(artistDropdown);
//   getConcertsByArtist("artist", artistDropdown).then((val) => {
//     setartistConcerts(val);
//   });
//   console.log();
//   const options = artists;
//   return (
//     <div className="flex m-4">
//       <ReactDropdown
//         options={options}
//         className="border-2 p-2"
//         value={options[0]}
//         onChange={(e) => setArtistDropdown(e.value)}
//       />
//       {/* <FullCalendarGrid
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: "dayGridDay, dayGridWeek, dayGridMonth",
//           center: "title",
//         }}
//         themeSystem="standard"
//         plugins={[dayGridPlugin]}
//         //events={() => getConcertsByCity(cityEndpoint, city)}
//         events={artistConcerts}
//       /> */}
//     </div>
//   );
};

export default getArtists
