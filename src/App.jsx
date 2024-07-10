import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Alumni from "./pages/Alumni";
import Alumnitracking from "./pages/Alumnitracking";
import Featured from "./pages/Featured";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    //deploy
    // basename="/umak-clone"
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Alumni />} />
          <Route path="alumnitracking" element={<Alumnitracking />} />
          <Route path="featured" element={<Featured />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
