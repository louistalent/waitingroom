import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Wait_room from "./component/wait_room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Wait_room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
