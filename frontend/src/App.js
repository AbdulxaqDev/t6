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

 const nextTen = (p) => { 
  setPage(page + 1)
  // generateData(rnn, country)
 }

 const selectedCountry = (c) => {
  generateData(rnn, c);
  setCountry(c);
 };
 const randomNumber = (r) => {
  generateData(r, country);
  setRnn(r);
 };
 const errors = (e) => {
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
  setAllData([...all]);
 }
 
 useEffect(() => {
  if (page > 1) {
   generateData(rnn, country, page)
  }
 }, [page, error])

 const deleteError = (d) => {
  let r = Math.floor(Math.random() * d.length)
  d.splice(r, 1)
 }
 const addError = () => { }
 const swapError = () => { }

 const insertError = (e) => { 
  let wrongDatas = allData.length * e
  for (let i = 0; i < wrongDatas; i++) {
   let r = Math.floor(Math.random() * allData)
   
  }
 }





 return (
  <div className="App" style={{ padding: "100px 50px " }}>
   <Header
    selectedCountry={selectedCountry}
    randomNumber={randomNumber}
    errors={errors}
    allData={ allData}
   />
   <Data dataNum={allData} nextTen={nextTen} />
  </div>
 );
}

export default App;
