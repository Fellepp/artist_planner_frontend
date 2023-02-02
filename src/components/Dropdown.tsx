import { useState } from "preact/hooks";
import { listenerCount } from "process";
import React from "react";
import ReactDropdown from "react-dropdown";

const artists: string[] = [];

const getArtists = (data: any) => {
  data.forEach((concert: any) => {
    if (!artists?.includes(concert.artist)) {
      artists.push(concert.artist);
    }
  });
};
const Dropdown = () => {
  const options = artists;
  return (
    <div className="flex m-4">
      <ReactDropdown
        options={options}
        className="border-2 p-2"
        value={options[0]}
      />
    </div>
  );
};

export { Dropdown, getArtists };
