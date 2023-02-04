import { getArtists } from "./components/ArtistDropdown";

const baseURL = "http://localhost:8080/api/v1";

const getConcertsByCity = async (endpoint: string, city: string) => {
  const response = await fetch(baseURL + "/" + endpoint + "/" + city);
  const data = await response.json();
  return createEvents(data, "city");
};

const getConcertsGlobal = async () => {
  const response = await fetch(baseURL + "/global");
  const data = await response.json();
  getArtists(data);
  return createEvents(data, "global");
};
const getConcertsByArtist = async (endpoint: string, artist: string) => {
  const newUrl = baseURL + "/" + endpoint + "/" + artist;
  console.log(newUrl);
  const response = await fetch(baseURL + "/" + endpoint + "/" + artist);
  const data = await response.json();
  return createEvents(data, "artist");
};
const createEvents = (data: any, type: string) => {
  const events: any = [];

  if (type == "global") {
    data.forEach((concert: any) => {
      events.push({
        title: `${concert.artist} - ${concert.country}, ${concert.city}, ${concert.event} (${concert.category})`,
        date: concert.date.split("T")[0],
      });
    });
  } else if (type == "city") {
    data.forEach((concert: any) => {
      events.push({
        title: `${concert.artist} \n ${concert.event} (${concert.category})`,
        date: concert.date.split("T")[0],
      });
    });
  } else if (type == "artist") {
    data.forEach((concert: any) => {
      console.log(concert.artist);
      events.push({
        title: `${concert.artist} \n ${concert.event} (${concert.category})`,
        date: concert.date.split("T")[0],
      });
    });
  }

  return events;
};

export { getConcertsByCity, getConcertsGlobal, getConcertsByArtist };
