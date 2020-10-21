import React from "react";
import "./App.css";
import { useFetch } from "../useFetch";
import { Map } from "../Map";

export const App = () => {
  const { status, data } = useFetch("/annotatedData.geojson", []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kentik Visualization Project</h1>
        {status === "loading" && "..."}
        {status === "error" && "Whoops!"}
        {status === "loaded" && <Map geo={data}></Map>}
      </header>
    </div>
  );
};
