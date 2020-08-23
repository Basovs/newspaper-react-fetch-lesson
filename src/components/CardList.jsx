import React from "react"
import { useState, useEffect } from "react"
import Card from "./Card"

const CardList = () => {
  const [newspapers, setNewspapers] = useState([])
  const newspapersFetcher = () => {
    fetch("https://chroniclingamerica.loc.gov/newspapers.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setNewspapers(jsonData.newspapers)
        console.log("newspapers:")
        // console.log(jsonData.newspapers);
      })
  }
  useEffect(() => {
    newspapersFetcher()
  }, [])

  return (
    <div>
      <h2>CardList</h2>
      {/* {NewspaperList.map((item, index) => {
        return <Card key={index} lccn={item.lccn} data={item} />
      })} */}
    </div>
  )
}

export default CardList

// // Merge lccnArr and dateArr
// let mergedArr = lccnArr.map((item, i) => Object.assign({}, item, dateArr[i]));

// console.log(mergedArr);
