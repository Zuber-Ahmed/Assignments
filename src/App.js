import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
  <div >
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
