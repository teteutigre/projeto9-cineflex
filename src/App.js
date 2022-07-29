import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Schedules from "./components/Schedules/Schedules";
import Assentos from "./components/Assentos/Assentos";

export default function App() {
  return (
    <>
      <Top />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/filme/:idFilme" element={<Schedules />} />
          <Route path="/assentos/:idSessao" element={<Assentos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
