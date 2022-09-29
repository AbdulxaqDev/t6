import "./App.css";
import Header from "./components/Header";
import Data from "./components/Data";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function App() {
 const [country, setCountry] = useState("fr");
 const [rnn, setRnn] = useState("");
 const [error, setError] = useState(0);
 const [allData, setAllData] = useState([]);
 const [page, setPage] = useState(1);

 const selectedCountry = (c) => {
  generateData(rnn, c);
  setCountry(c);
 };
 const randomNumber = (r) => {
  generateData(r, country);
  setRnn(r);
 };
 const errors = (e) => {
  generateData();
  setError(e);
 };

 function generateData(r, c) {
  faker.locale = c;
  faker.seed(Number(r));
  let all = [];
  let dataNum = page === 1 ? 20 : (page + 1) * 10;
  for (let i = 0; i < dataNum; i++) {
   all.push([
    faker.random.numeric(5),
    faker.name.fullName(),
    `${faker.address.city()}, ${faker.address.street()}`,
    faker.phone.number(),
   ]);
  }
  // page === 1 ? setAllData([...all]) : setAllData([...allData, ...all])
  setAllData([...all]);
 }

 window.addEventListener("scroll", (e) => {
  console.log((-document.body.getBoundingClientRect().top + e.target.body.offsetHeight)%e.target.body.offsetHeight === 100);
 });

 return (
  <div className="App" style={{ padding: "100px 50px " }}>
   <Header
    selectedCountry={selectedCountry}
    randomNumber={randomNumber}
    errors={errors}
   />
   <Data dataNum={allData} />
  </div>
 );
}

export default App;
