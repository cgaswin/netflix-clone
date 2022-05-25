import React from "react";
import requests from "../Requests";
import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId="2" title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowId="3" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchUrl={requests.requestHorror} />
    </div>
  );
};

export default Home;
