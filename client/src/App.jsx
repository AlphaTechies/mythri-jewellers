import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
function App() {

  return (
    // <div className="flex flex-col gap-2 h-screen items-center justify-center">
    //   <h1 className="text-3xl">Mythri Jewellers</h1>
    //   <p className="text-xl text-gray-700">Hold tight...</p>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
 
  )
}

export default App
