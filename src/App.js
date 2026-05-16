import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



