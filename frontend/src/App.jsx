import './css/App.css'
import NovelCard from "./components/NovelCard"
import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { NovelProvider } from './contexts/NovelContext'
//Component is anything in JS that returns jsx code. 
//Below is a component.
//Being jsx = must have parent element. So no two divs at the same, root level. 
// Fragment is the place hoder for parent<></> With this you can put two divs at the same level.
//Always start with capital, like App.
//State is something that when it's updated, the component will change and rerender to show new state.
//  You can define multiple state in a single component.
//  State doesn't survive a page refresh but does a rerender. 

function App() {
  return (
    <NovelProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/novel-react-app" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>

        </Routes>
      </main>
    </NovelProvider>
  )
}



export default App
