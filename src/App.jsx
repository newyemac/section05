import './App.css'
import {useState} from "react";

// import Header from './components/Header.jsx'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Button from './components/Button'
const Bulb = () => {
  const [light, setLight] = useState("OFF")

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor: "orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor: "gray"}}>OFF</h1>
      )
      }

<button onClick={() => {
      setLight(light === "ON" ? "OFF":"ON")
    }}>
      {light === "ON" ? "끄기":"켜기"}
    </button>
    </div>
  )
}

const Counter= ()=>{
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>{count}</h1>
    <button onClick ={() =>{
      setCount(count+1)
    }}>
      +
    </button>
    </div>
  )
}
function App() {
  // return (
  //   <>
  //     <Button text={"메일"} color={"red"}/>
  //     <Button text={"카페"}/>
  //     <Button text={"블로그"}/>
  //   </>
  // ) 



  return <>
    <Bulb />
    <Counter />
  </>
} 

export default App;
