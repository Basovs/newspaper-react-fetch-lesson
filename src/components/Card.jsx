import React from "react";
// import { useState, useEffect } from "react";

const Card = ({ data }) => {
  // const [newspaper, setNewspaper] = useState([]);

  // const fetchNewspaper = () => {
  //   fetch(`https://chroniclingamerica.loc.gov/lccn/${data.lccn}.json`)
  //     .then(res => {
  //       res.json();
  //     })
  //     .then(jsonData => setNewspaper(jsonData.issues));
  // };

  // useEffect(() => {
  //   fetchNewspaper();
  //   console.log(newspaper);
  // }, []);

  return (
    <div>
      <h3>Title: {data.title}</h3>
      <a href={`https://chroniclingamerica.loc.gov/lccn/${data.lccn}.json`}>
        To - {`https://chroniclingamerica.loc.gov/lccn/${data.lccn}.json`}
      </a>
    </div>
  );
};

export default Card;
