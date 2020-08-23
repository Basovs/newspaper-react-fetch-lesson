import React from "react";
import { useState, useEffect } from "react";

const newpaperUrl = () => {
  const [newspaperIssues, setNewspaperIssues] = useState([]);

  lccnArr.map((lccnNr, index) => {
    console.log(`newpaperUrl - Activated ${index} times.`);
    fetch(`https://chroniclingamerica.loc.gov/lccn/${lccnNr}.json`)
      .then(res => res.json())
      .then(jsonData => {
        setNewspaperIssues(jsonData.issues);
        console.log(`newpaperIssues completed ${index} times.`);
        // console.log(jsonData.issues);
      });
    return null;
  });
};

export default newpaperUrl;
