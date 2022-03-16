import React from "react";

export default function App(props) {
  return (
    <div>
      <h1>Potizese</h1>
      {props.children}
    </div>
  );
}
