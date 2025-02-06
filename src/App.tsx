import './App.css'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div className="grid-container">
        <Sidebar/>
        <Header/>
        <Home/>
      </div>
    </Router>
  )
}

export default App
