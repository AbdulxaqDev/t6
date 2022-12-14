import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CSVLink, CSVDownload } from "react-csv";

export default function Header({
 selectedCountry = () => {},
 randomNumber = () => {},
 getCsv = () => {},
 errors = () => {},
 allData,
}) {
 const [country, setCountry] = useState("Choose country");
 const [rnn, setRnn] = useState("");
 const [error, setError] = useState(0);
 const randomRange = 10_000_000;
 let countries = [
  { "Unated States": "en_US" },
  { French: "fr" },
  { Georgian: "ge" },
  { Japanese: "ja" },
 ];

 useEffect(() => {
  let r = Math.floor(Math.random() * randomRange);
  randomNumber(r);
  setRnn(r);
 }, []);

 return (
  <Navbar
   variant="dark"
   style={{
    backgroundColor: "#32353850",
    backdropFilter: "blur(10px)",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
   }}
   expand="lg"
  >
   <Container fluid>
    <Navbar.Brand className="mx-5" href="#home">
     <Icon />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-2 border p-1 rounded-2 border-secondary">
      <Dropdown>
       <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        {country}
       </Dropdown.Toggle>
       <Dropdown.Menu variant="dark">
        {countries.map((country) => (
         <Dropdown.Item
          key={Object.values(country)}
          onClick={() => {
           selectedCountry(Object.values(country));
           setCountry(Object.keys(country));
          }}
         >
          {Object.keys(country)}
         </Dropdown.Item>
        ))}
       </Dropdown.Menu>
      </Dropdown>
     </Nav>

     <Nav className="me-2 d-flex border p-1 rounded-2 border-secondary">
      <Form.Control
       className="me-2"
       aria-label="Recipient's username"
       aria-describedby="basic-addon2"
       value={rnn}
       onChange={(e) => {
        setRnn(e.target.value);
        randomNumber(e.target.value);
       }}
      />
      <Button
       variant="primary"
       onClick={() => {
        let grn = Math.floor(Math.random() * randomRange);
        setRnn(grn);
        randomNumber(grn);
       }}
      >
       Random
      </Button>
     </Nav>

     <Nav
      className="ms-2 d-flex align-items-center border p-1 rounded-2 border-secondary"
      style={{ width: "100%" }}
     >
      <Form.Control
       aria-label="Recipient's username"
       aria-describedby="basic-addon2"
       style={{ width: "10%" }}
       value={error}
       onChange={(e) => {
        setError(e.target.value);
        errors(e.target.value);
       }}
       type="number"
       max={1000}
       min={0}
      />
      <Form.Range
       className="mx-2"
       value={error}
       max={10}
       min={0}
       step={0.5}
       style={{ width: "100%" }}
       onChange={(e) => {
        setError(e.target.value);
        errors(e.target.value);
       }}
      />
     </Nav>
     <Nav className="ms-2 border p-1 rounded-2 border-secondary">
      <CSVLink data={allData}>
       <Button onClick={getCsv} style={{ width: "100px" }} variant="success">
        Get CSV
       </Button>
      </CSVLink>
      ;
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
}

const Icon = (props) => (
 <div className="py-2 text-white">
  <svg
   className="icon-logo-svg mixed-array-demo el-01"
   width={194}
   height={29}
   fill="none"
   {...props}
  >
   <path
    d="m21.54 7.473 3.81.023V9.41c0 6.64-2.11 8.574-2.811 9.214-2.117 1.94-6.03 2.924-11.635 2.927l-3.806-.033V19.6c0-6.637 2.111-8.572 2.812-9.214 2.103-1.93 6.027-2.912 11.63-2.912ZM21.56.5C6.324.5.015 6.925.015 19.6L0 28.5h10.883c15.237 0 21.547-6.425 21.547-19.104L32.462.5H21.56ZM43.135 2.856h3.745v3.648h-3.745V2.856Zm.095 6.774h3.578v16.521H43.23V9.63ZM52.252 4.696h3.579V9.63h4.286v2.824h-4.279v8.027c0 1.142.184 1.944.552 2.406.366.46 1.023.69 1.997.69.314 0 .672-.016 1.07-.048.341-.02.68-.076 1.008-.167v2.941a9.496 9.496 0 0 1-1.197.215c-.49.062-.985.093-1.48.092-1.906 0-3.306-.506-4.199-1.517-.893-1.011-1.338-2.416-1.337-4.214V4.696ZM64.557 9.63h3.578v2.545a7.028 7.028 0 0 1 2.155-2.147 5.662 5.662 0 0 1 3.1-.826v3.402a7.22 7.22 0 0 0-.378-.048 4.123 4.123 0 0 0-.409-.015 3.949 3.949 0 0 0-1.715.384 4.522 4.522 0 0 0-1.4 1.04 5.15 5.15 0 0 0-.96 1.58 5.958 5.958 0 0 0-.393 2.025v8.581h-3.578V9.63ZM94.234 9.63h3.579v2.114a6.224 6.224 0 0 1 2.154-1.853 6.615 6.615 0 0 1 3.132-.69c2.075 0 3.609.588 4.6 1.761.992 1.174 1.49 2.845 1.493 5.014V26.15h-3.578v-9.503c0-1.494-.356-2.573-1.069-3.238a3.612 3.612 0 0 0-1.199-.763 3.694 3.694 0 0 0-1.41-.248 4.435 4.435 0 0 0-1.575.274 3.82 3.82 0 0 0-2.175 2.147 5.097 5.097 0 0 0-.363 1.808v9.523h-3.578l-.01-16.521ZM130.555 2.856h3.742v3.648h-3.742V2.856Zm.095 6.774h3.578v16.521h-3.578V9.63ZM139.716 4.696h3.578V9.63h4.279v2.824h-4.271v8.027c0 1.142.183 1.944.549 2.406.368.46 1.023.69 1.999.69.315 0 .67-.016 1.069-.048.34-.02.678-.076 1.007-.167v2.941a9.406 9.406 0 0 1-1.197.215c-.489.062-.983.093-1.477.092-1.91 0-3.31-.506-4.199-1.517-.89-1.011-1.336-2.416-1.337-4.214V4.696ZM152.112 2.856h3.745v3.648h-3.745V2.856Zm.095 6.774h3.578v16.521h-3.578V9.63ZM159.607 16.895a8.637 8.637 0 0 1 .598-3.343 6.67 6.67 0 0 1 1.651-2.405 6.991 6.991 0 0 1 2.494-1.455 9.352 9.352 0 0 1 3.068-.498 9.214 9.214 0 0 1 3.052.498 7.014 7.014 0 0 1 2.469 1.455 6.859 6.859 0 0 1 1.666 2.405c.429 1.064.637 2.2.614 3.343v2.034a8.476 8.476 0 0 1-.614 3.342 6.862 6.862 0 0 1-1.677 2.386 7.014 7.014 0 0 1-2.469 1.455 9.272 9.272 0 0 1-3.052.498 9.422 9.422 0 0 1-3.067-.498 6.988 6.988 0 0 1-2.484-1.455 6.67 6.67 0 0 1-1.651-2.405 8.652 8.652 0 0 1-.598-3.323v-2.034Zm3.647 2.114c0 1.532.377 2.695 1.132 3.487.755.792 1.766 1.193 3.032 1.202 1.257 0 2.263-.398 3.018-1.195.755-.797 1.133-1.96 1.135-3.487v-2.214c0-1.53-.378-2.7-1.135-3.509-.756-.808-1.763-1.212-3.018-1.21-1.258 0-2.265.403-3.022 1.21-.756.807-1.134 1.977-1.132 3.51l-.01 2.206ZM179.022 9.63h3.578v2.114a6.228 6.228 0 0 1 2.155-1.853 6.61 6.61 0 0 1 3.131-.69c2.076 0 3.609.588 4.601 1.761.992 1.174 1.496 2.845 1.513 5.014V26.15h-3.578v-9.503c0-1.494-.357-2.573-1.069-3.238a3.619 3.619 0 0 0-1.201-.763 3.688 3.688 0 0 0-1.411-.248 4.427 4.427 0 0 0-1.572.274 3.845 3.845 0 0 0-1.278.815 3.834 3.834 0 0 0-.895 1.332 5.058 5.058 0 0 0-.363 1.808v9.523h-3.578l-.033-16.521ZM126.289 19.086a3.972 3.972 0 0 0-1.068-1.442 4.647 4.647 0 0 0-1.621-.856 9.75 9.75 0 0 0-2.075-.384l-1.984-.184c-.4-.02-.798-.06-1.193-.122a3.666 3.666 0 0 1-1.007-.307 1.949 1.949 0 0 1-.708-.568 1.494 1.494 0 0 1-.269-.933 1.76 1.76 0 0 1 .23-.94c.164-.287.405-.524.698-.687.619-.367 1.505-.55 2.658-.55 1.675.035 3.326.394 4.857 1.056l1.094-2.74a10.35 10.35 0 0 0-2.702-.921 17.02 17.02 0 0 0-3.492-.339 10.25 10.25 0 0 0-2.507.297 6.805 6.805 0 0 0-2.157.95 5.015 5.015 0 0 0-1.508 1.595 4.285 4.285 0 0 0-.568 2.241 5.134 5.134 0 0 0 .442 2.254 3.979 3.979 0 0 0 1.163 1.457 4.908 4.908 0 0 0 1.652.812c.63.176 1.279.284 1.935.321l1.919.184a5.066 5.066 0 0 1 2.28.55c.575.33.864.88.864 1.657.019.351-.07.7-.256 1.002a1.797 1.797 0 0 1-.789.689 6.255 6.255 0 0 1-2.753.52 11.831 11.831 0 0 1-3.223-.428 17.342 17.342 0 0 1-1.905-.66l-1.065 2.682c.42.223.863.402 1.321.536.501.154 1.025.287 1.572.398.547.111 1.092.195 1.636.25.509.059 1.021.09 1.533.091a12.08 12.08 0 0 0 2.61-.291 7.716 7.716 0 0 0 2.377-.934 5.507 5.507 0 0 0 1.731-1.659c.465-.741.7-1.599.674-2.468a5.14 5.14 0 0 0-.396-2.129ZM89.534 12.863a4.688 4.688 0 0 0-1.212-2.082 4.99 4.99 0 0 0-2.185-1.196 12.235 12.235 0 0 0-3.302-.383c-.767 0-2.467.12-3.64.528-.91.28-1.77.69-2.556 1.217l1.022 2.556a7.617 7.617 0 0 1 1.593-.777 9.041 9.041 0 0 1 2.924-.429 7.283 7.283 0 0 1 2.14.25c.486.126.923.39 1.255.759.333.368.547.824.615 1.31.102.587.15 1.182.143 1.778v.214h-3.496c-2.413 0-4.207.404-5.38 1.21-1.175.807-1.762 2.13-1.762 3.97 0 1.513.467 2.692 1.4 3.54.935.846 2.355 1.27 4.262 1.272 2.264 0 3.921-.757 4.971-2.269v1.82h3.579V15.883a10.642 10.642 0 0 0-.371-3.02Zm-3.208 7.311a3.582 3.582 0 0 1-.375 1.62 3.68 3.68 0 0 1-1.072 1.292 3.67 3.67 0 0 1-1.336.598c-.48.11-.972.167-1.465.169-1.907 0-2.86-.726-2.863-2.177a3.224 3.224 0 0 1 .19-1.18c.12-.31.341-.571.628-.747.359-.206.754-.341 1.166-.399a11.44 11.44 0 0 1 1.825-.122h3.302v.946Z"
    fill="#fff"
   />
  </svg>
  <small> Task-6</small>
 </div>
);
