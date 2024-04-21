import './App.css'
import {useState} from "react";

// import Header from './components/Header.jsx'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Button from './components/Button'

function App() {
  // return (
  //   <>
  //     <Button text={"메일"} color={"red"}/>
  //     <Button text={"카페"}/>
  //     <Button text={"블로그"}/>
  //   </>
  // ) 
  const [count, setCount] = useState(0)
  const [light, setLight] = useState("OFF")

  return <>
  <div>
    <h1>{light}</h1>
    <button onClick={() => {
      setLight(light === "ON" ? "OFF":"ON")
    }}>
      {light === "ON" ? "끄기":"켜기"}
    </button>
  </div>
  <div>
    <h1>{count}</h1>
    <button onClick ={() =>{
      setCount(count+1)
    }}>
      +
    </button>
    </div>
  </>
} 

export default App;
