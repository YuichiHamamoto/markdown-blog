import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Page from "./components/Page";

import { index } from "./markdowns";
function App() {
  const navigate = useNavigate();

  const openPage = (url: string) => {
    navigate(url);
  };
  return (
    <div className="app">
      <div className="app_navbar">
        {index.map((element) => (
          <div
            className="clickable"
            onClick={() => {
              openPage(element.url);
            }}
            key={`nav_${element.url}`}
          >
            {`${element.name}`}
          </div>
        ))}
      </div>
      <div className="app_body">
        <Routes>
          <Route path="/" element={<h1 style={{ padding: "50px" }}>Home</h1>} />
          {index.map((element) => (
            <>
              <Route path={`/${element.url}`} element={<Page fileName={`${element.name}`} />} key={`page_${element.url}`} />
            </>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
