import React from "react";
import { useState } from "react";
import "./style.css";

export default function App() {
  const [cont, setCont] = useState(0);
  const [date, setDate] = useState(Date());
  
  function update () {
    setCont(cont + 1);
    setDate(Date());
  }
  return (
    <div>
      <h1>Hello Stranger!</h1>
      <p>Contador: {cont} </p>
      <p>Date: {date} </p>
      <button onClick = {update}>Haz click para actualizar</button>
    </div>
  );
}
