import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "./Card";

const CardList = () => {
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {
    const newspapersFetcher = () => {
      fetch("https://chroniclingamerica.loc.gov/newspapers.json")
        .then(res => res.json())
        .then(jsonData => {
          setNewspapers(jsonData.newspapers);
          // console.log(`'newspapers' are fetched.`);
          return jsonData.newspapers;
        })
        .then(jsonDataNewspapers => {
          jsonDataNewspapers.slice(0, 12).map((item, index) => {
            // console.log(item.title);
            mapAndFetchNewspaperUrl(item.url);
          });
          // console.log(jsonDataNewspapers);
        });
    };
    newspapersFetcher();
  }, []);

  // Manipulate url end point.
  const [newspaper, setNewspaper] = useState([]);
  const mapAndFetchNewspaperUrl = newspaperUrl => {
    fetch(newspaperUrl)
      .then(res => res.json())
      .then(jsonData => {
        // console.log(jsonData.issues);
        setNewspaper(newspaperCurrent => {
          return [
            ...newspaperCurrent,
            {
              url: jsonData.issues[0].url.replace(".json", "/seq-1.pdf"),
              name: jsonData.name,
            },
          ];
        });
        // console.log(jsonData.issues[0].url.replace(".json", "/seq-1.pdf"));
        // console.log(newspaper);

        // console.log(
        //   `'newspapersUrlArr' is maped and 'newpaper.url' is fetched.`
        // );
      });
  };

  // Get

  return (
    <CardListShell>
      <Wrapper>
        <h2>CardList</h2>
        <CardListWrapper>
          {newspaper.map((item, index) => {
            return <Card key={index} pdfUrl={item.url} title={item.name} />;
          })}
        </CardListWrapper>
      </Wrapper>
    </CardListShell>
  );
};

export default CardList;

const CardListShell = styled.div`
  color: #fff;
`;
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 1200px;
  margin: 0 auto;
`;
const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  column-gap: 30px;
  row-gap: 70px;
`;
