import { Routes, Route } from "react-router-dom"
import { QuestionPages } from "./components/QuestionsPages"
import { Beggining } from "./components/Beggining"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>


        <Route path="/" element={<Beggining />} />
        <Route path="/questionPages" element={<QuestionPages />} />


      </Routes>
    </div>
  )
}

export default App