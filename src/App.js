import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Top from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Schedules from "./components/Schedules/Schedules";
import Seat from "./components/Assentos/Seat";
import Sucess from "./components/Sucess/Sucess";

export default function App() {
  return (
    <>
      <Top />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/filme/:idFilme" element={<Schedules />} />
          <Route path="/assentos/:idSessao" element={<Seat />} />
          <Route path="/sucesso" element={<Sucess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
