import React, { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Table from "react-bootstrap/Table";

export default function Data({ dataNum, nextTen = () => { } }) {


 const [latOne, inView] = useInView({
  /* Optional options */
  triggerOnce: true,
  rootMargin: '0px 0px',
 })
 
 useEffect(() => { 
  if (inView) {
   nextTen(inView)
  }
 }, [inView])



 return (
  <Table striped bordered hover variant="dark">
   <thead>
    <tr>
     <th>#</th>
     <th>Random identifier</th>
     <th>Full name</th>
     <th>Address</th>
     <th>Phone number</th>
    </tr>
   </thead>
   <tbody>
    {dataNum.map((data, i) => {
     const isLastElement = dataNum.length === i + 1;
     return isLastElement ? (
      <tr key={i} ref={latOne} id="lastOne">
       <td>{i + 1}</td>
       <td>{data[0]}</td>
       <td>{data[1]}</td>
       <td>{data[2]}</td>
       <td>{data[3].includes("+") ? data[3] : "+" + data[3]}</td>
      </tr>
     ) : (
      <tr key={i}>
       <td>{i + 1}</td>
       <td>{data[0]}</td>
       <td>{data[1]}</td>
       <td>{data[2]}</td>
       <td>{data[3].includes("+") ? data[3] : "+" + data[3]}</td>
      </tr>
     );
    })}
   </tbody>
  </Table>
 );
}



function useOnScreen(ref) {

 const [isIntersecting, setIntersecting] = useState(false)

 const observer = new IntersectionObserver(
   ([entry]) => setIntersecting(entry.isIntersecting)
 )

 useEffect(() => {
   observer.observe(ref.current)
   // Remove the observer as soon as the component is unmounted
   return () => { observer.disconnect() }
 }, [])

 return isIntersecting
}