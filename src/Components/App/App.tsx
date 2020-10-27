import React, { useState } from "react";
import LaunchList from "../List";
import LaunchInfo from "../Info";
import { useStyles } from "./App.styles";

export default function App() {
  const [flightNumber, setFlightNumber] = useState(42);
  const classes = useStyles();

  function handleNumberChange(newNumber: number) {
    setFlightNumber(newNumber);
  }

  return (
    <div className={classes.root}>
      <LaunchList handleNumberChange={handleNumberChange} />
      <LaunchInfo flightNumber={flightNumber} />
    </div>
  );
}
