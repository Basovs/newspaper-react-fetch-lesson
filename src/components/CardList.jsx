import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const CardList = () => {
  const [newspaperList, setNewspaperList] = useState([]);
  const fetchNewspaperList = () => {
    fetch("https://chroniclingamerica.loc.gov/newspapers.json")
      .then(res => res.json())
      .then(jsonData => {
        setNewspaperList(jsonData.newspapers);
        console.log("asdasdasdasdasd");
        // console.log(jsonData.newspapers);
      });
  };

  // Fill lccnArr
  let lccnArr = [];
  const returnLccnArr = () => {
    newspaperList.map((item, index) => {
      lccnArr.push(item.lccn);
      console.log(lccnArr);
      return null;
    });
  };
  returnLccnArr();

  const [newspaperIssues, setNewspaperIssues] = useState([]);

  // // Merge lccnArr and dateArr
  // let mergedArr = lccnArr.map((item, i) => Object.assign({}, item, dateArr[i]));

  // console.log(mergedArr);

  useEffect(() => {
    fetchNewspaperList();

    // console.log("basovs");
    lccnArr.slice(0, 1).map(lccnNr => {
      console.log("basovs");
      fetch(`https://chroniclingamerica.loc.gov/lccn/${lccnNr}.json`)
        .then(res => res.json())
        .then(jsonData => {
          setNewspaperIssues(jsonData.issues);
          console.log("janis");
          // console.log(jsonData.issues);
        });

      // Get First aviable date_issued
      let firstDateIssued = [];
      const returnDateArr = () => {
        newspaperIssues.slice(0, 1).map(item => {
          firstDateIssued.push(item.date_issued);

          console.log(firstDateIssued);
          return null;
        });
      };
      returnDateArr();

      return null;
    });
  }, [lccnArr]);

  return (
    <div>
      <h2>CardList</h2>

      {/* {newspaperList.map((item, index) => {
        return <Card key={index} lccn={item.lccn} data={item} />;
      })} */}
    </div>
  );
};

export default CardList;
