import React from "react";
import newspaperList from "../lib/newspaperList";

const lccnArr = () => {
  let lccnArr = [];

  newspaperList.map((item, index) => {
    lccnArr.push(item.lccn);
    console.log(lccnArr);
    return null;
  });

  return null;
};

export default lccnArr;
