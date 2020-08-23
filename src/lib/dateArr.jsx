import React from "react";

const dateArr = () => {
  let firstDateIssued = [];

  newspaperIssues.slice(0, 1).map(item => {
    firstDateIssued.push(item.date_issued);

    console.log(firstDateIssued);
    return null;
  });
  return null;
};

export default dateArr;
