import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageAjouterUnPatient from "./pages/PageAjouterUnPatient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<PageHome />} />
              <Route path="/ajouterunpatient" element={<PageAjouterUnPatient />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
