import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import CharacterDetail from "./components/CharacterDetail"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Characters />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




