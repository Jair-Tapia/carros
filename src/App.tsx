import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "./pages/Admin"
import Catalogo from "./pages/Catalogo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App