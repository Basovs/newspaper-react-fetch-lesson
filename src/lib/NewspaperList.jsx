import React from "react";
import { useState, useEffect } from "react";

const NewspaperList = () => {
  const [newspaperList, setNewspaperList] = useState([]);

  fetch("https://chroniclingamerica.loc.gov/newspapers.json")
    .then(res => res.json())
    .then(jsonData => {
      setNewspaperList(jsonData.newspapers);
      console.log("newspaper-list:");
      // console.log(jsonData.newspapers);
    });

  return newspaperList;
};

export default NewspaperList;
