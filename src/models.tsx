
import { directive } from "@babel/types";
import { Dictionary } from "express-serve-static-core";
import { printDiffLines } from "jest-diff/build/diffLines";
import { getArtists } from "./components/Dropdown";

const baseURL = "http://localhost:8080/api/v1";

const getConcertsGlobal = async () => {
  const response = await fetch(baseURL + "/global");
  const data = await response.json();
  getArtists(data);
  return createEvents(data, "global");
};

const getConcertsByContinent = async (endpoint: string, continent: string) => {
  const response = await fetch(baseURL + endpoint + "/" + continent);
  const data = await response.json();
  return createEvents(data, "continent");
};

const getConcertsByCountry = async (endpoint: string, country: string) => {
  const response = await fetch(baseURL + endpoint + "/" + country);
  const data = await response.json();
  return createEvents(data, "country");
};

const getConcertsByCity = async (endpoint: string, city: string) => {
  const response = await fetch(baseURL + "/" + endpoint + "/" + city);
  const data = await response.json();
  return createEvents(data, "city");
};

const getConcertsByArtist = async (endpoint: string, artist: string) => {
  const response = await fetch(baseURL + endpoint + "/" + artist);
  const data = await response.json();
  return createEvents(data, "artist");
};

const getConcertsByContinentAndArtist = async (endpoint: string, continent: String, artist: string) => {
  const response = await fetch(baseURL + endpoint + "/" + continent + "/" + artist);
  const data = await response.json();
  return createEvents(data, "continent");
};

const createEventTitle = (concert: any, type: String) => {
  var titleString: String = ""

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

const createEventColor = (colorsByCountry: any, country: string) => {
  const colors = {
    "#FF0000" : "#FFFFFF", // RED
    "#0000FF" : "#FFFFFF", // BLUE
    "#00008B" : "#FFFFFF", // DARK BLUE
    "#800080" : "#FFFFFF", // PURPLE
    "#FF00FF" : "#FFFFFF", // MAGENTA
    "#808080" : "#FFFFFF", // GREY
    "#000000" : "#FFFFFF", // BLACK
    "#FFA500" : "#FFFFFF", // ORANGE
    "#A52A2A" : "#FFFFFF", // BROWN
    "#008000" : "#FFFFFF", // GREEN
    "#800000" : "#FFFFFF", // MAROON
    "#808000" : "#FFFFFF", // OLIVE
    "#00FFFF" : "#000000", // CYAN
    "#FFC0CB" : "#000000", // PINK
    "#C0C0C0" : "#000000", // SILVER
    "#ADD8E6" : "#000000", // LIGHT BLUE
    "#FFFF00" : "#000000", // YELLOW
    "#00FF00" : "#000000", // LIME
    "#7FFFD4" : "#000000" // AQUAMARINE
  }


  if (Object.keys(colorsByCountry).length === 0) {
    return colors
  } else if (country in colorsByCountry) {
    return colorsByCountry[country]
  } else {
    console.log(colorsByCountry)
    return colors
  }
}

const getConcertsByArtist = async (endpoint: string, artist: string) => {
  const newUrl = baseURL + "/" + endpoint + "/" + artist;
  console.log(newUrl);
  const response = await fetch(baseURL + "/" + endpoint + "/" + artist);
  const data = await response.json();
  return createEvents(data, "artist");
};

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

export {
  getConcertsGlobal,
  getConcertsByContinent,
  getConcertsByCountry,
  getConcertsByCity,
  getConcertsByArtist,
  getConcertsByContinentAndArtist
};
