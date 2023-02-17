import { Dictionary } from "@fullcalendar/core/internal";

const baseURL = "http://localhost:8080/api/v1";

type Concert = {
  id: string,
  artist: string,
  category: string,
  city: string,
  continent: string,
  country: string,
  date: string,
  event: string,
}

type Event = {
  title: string,
  textColor: string,
  color: string,
  date: string
}

const getConcertsGlobal = async () : Promise<Event[]> => {
  const response = await fetch(baseURL + "/global");
  const data: Concert[] = await response.json();
  return createEvents(data, "global");
};

const getConcertsByContinent = async (endpoint: string, continent: string) : Promise<Event[]> => {
  const response = await fetch(baseURL + endpoint + "/" + continent);
  const data = await response.json();
  return createEvents(data, "continent");
};

const getConcertsByCountry = async (endpoint: string, country: string) : Promise<Event[]> => {
  const response = await fetch(baseURL + endpoint + "/" + country);
  const data = await response.json();
  return createEvents(data, "country");
};

const getConcertsByCity = async (endpoint: string, city: string) : Promise<Event[]> => {
  const response = await fetch(baseURL + "/" + endpoint + "/" + city);
  const data = await response.json();
  return createEvents(data, "city");
};

const getConcertsByArtist = async (endpoint: string, artist: string) : Promise<Event[]> => {
  const response = await fetch(baseURL + endpoint + "/" + artist);
  const data = await response.json();
  return createEvents(data, "artist");
};

const getConcertsByContinentAndArtist = async (endpoint: string, continent: String, artist: string) : Promise<Event[]> => {
  const response = await fetch(baseURL + endpoint + "/" + continent + "/" + artist);
  const data = await response.json();
  return createEvents(data, "continent");
};

const createEventTitle = (concert: Concert, type: string): string => {
  var titleString = ""

  if (type === "global") {
    titleString = `${concert.artist} - ${concert.continent}, ${concert.country}, ${concert.city}, ${concert.event} (${concert.category})`
  } else if (type === "continent") {
    titleString = `${concert.artist} - ${concert.country}, ${concert.city}, ${concert.event} (${concert.category})`
  } else if (type === "country") {
    titleString = `${concert.artist} - ${concert.city}, ${concert.event} (${concert.category})`
  } else if (type === "city") {
    titleString = `${concert.artist} - ${concert.event} (${concert.category})`
  } else if (type === "artist") {
    titleString = `${concert.artist} - ${concert.continent}, ${concert.country}, ${concert.city}, ${concert.event} (${concert.category})`
  }
  return titleString
}

const createEventColor = (colorsByCountry: Record<string, string>, country: string): Record<string, string> => {
  let colors: Record<string, string> =
  {
    "#FF0000": "#FFFFFF", // RED
    "#0000FF": "#FFFFFF", // BLUE
    "#00008B": "#FFFFFF", // DARK BLUE
    "#800080": "#FFFFFF", // PURPLE
    "#FF00FF": "#FFFFFF", // MAGENTA
    "#808080": "#FFFFFF", // GREY
    "#000000": "#FFFFFF", // BLACK
    "#FFA500": "#FFFFFF", // ORANGE
    "#A52A2A": "#FFFFFF", // BROWN
    "#008000": "#FFFFFF", // GREEN
    "#800000": "#FFFFFF", // MAROON
    "#808000": "#FFFFFF", // OLIVE
    "#00FFFF": "#000000", // CYAN
    "#FFC0CB": "#000000", // PINK
    "#C0C0C0": "#000000", // SILVER
    "#ADD8E6": "#000000", // LIGHT BLUE
    "#FFFF00": "#000000", // YELLOW
    "#00FF00": "#000000", // LIME
    "#7FFFD4": "#000000" // AQUAMARINE
  }

  console.log(colors["#FF0000"])

  if (Object.keys(colorsByCountry).length === 0) {
    return colors
  } else if (country in colorsByCountry) {
    var eventColor = colorsByCountry[country]
    var textColor = colors[eventColor]
    return {eventColor: textColor}
  } else {
    return colors
  }
}

const createEvents = (data: Concert[], type: string): Event[] => {
  console.log("DATA")
  console.log(data)
  const events: Event[] = [];
  var colorsByCountry: Record<string, string> = {}

  data.forEach((concert: Concert) => {
    var colors = createEventColor(colorsByCountry, concert.country)
    var seed = Math.floor(Math.random() * Object.keys(colors).length)
    var eventColor = Object.keys(colors)[seed]
    var textColor = colors[eventColor]

    colorsByCountry[concert.country] = eventColor

    events.push({
      title: createEventTitle(concert, type),
      date: concert.date.split("T")[0],
      color: eventColor,
      textColor: textColor

    });
  });
  console.log("EVENTS")
  console.log(events)

  return events;
};

export {
  getConcertsGlobal,
  getConcertsByContinent,
  getConcertsByCountry,
  getConcertsByCity,
  getConcertsByArtist,
  getConcertsByContinentAndArtist
};
