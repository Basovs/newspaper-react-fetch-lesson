import React from "react";
import Card from "./Card";
import NewspaperList from "../lib/NewspaperList";

const CardList = () => {
  // // Merge lccnArr and dateArr
  // let mergedArr = lccnArr.map((item, i) => Object.assign({}, item, dateArr[i]));

  // console.log(mergedArr);
  NewspaperList();
  return (
    <div>
      <h2>CardList</h2>

      {NewspaperList.map((item, index) => {
        return <Card key={index} lccn={item.lccn} data={item} />;
      })}
    </div>
  );
};

export default CardList;
