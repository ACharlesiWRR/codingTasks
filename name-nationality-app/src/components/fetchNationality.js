import React from "react";
import { useState, useEffect } from "react";
import DisplayNationality from "./displayNationality";

// child component to do the API call

export default function FetchNationality({ firstName, surname }) {
  let [nationality, setNationality] = useState("");

  useEffect(() => {
    async function fetchNationality() {
      try {
        let response = await fetch(
          `https://api.nationalize.io?name=${surname}` // in the API docs it only uses the surname, should have read them earlier
        );
        let info = await response.json();
        console.log(info);
        if (info && info.country && info.country.length > 0) {
          // choose mmost likely country
          const mostLikelyNationality = info.country.reduce(
            (previous, current) =>
              previous.probability > current.probability ? previous : current
          );

          const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
          const countryName = regionNames.of(mostLikelyNationality.country_id);
          setNationality(countryName);
        } else {
          setNationality(`No nationality available`);
        }
      } catch (error) {
        alert(`Ooooppps. An error has occurred fetching the data: ${error}`);
        console.log(`An error has occurred fetching the data: ${error}`);
      }
    }
    fetchNationality();
  }, [firstName, surname]); // runs when updated

    console.log({ nationality }); // add in probability?

    return (
    <DisplayNationality nationality={nationality} />);
}

// <DisplayNationality />;
//   return <h2>Your Most Likely Nationality is {nationality}</h2>; // add in probability?



