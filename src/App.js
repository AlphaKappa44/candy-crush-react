import { useEffect, useState } from "react"

const width = 8
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
]

const App = () => {
  const[currentColorArrangement, setcurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomNumberFrom0To5 = Math.floor(Math.random() * candyColors.length)
      const randomColor = candyColors[randomNumberFrom0To5]
      randomColorArrangement.push(randomColor)
    }
    // console.log(randomColorArrangement)
    setcurrentColorArrangement(randomColorArrangement)
  }

// createBoard() in a useEffect with empty array to be used only once 
useEffect(() => {
  createBoard()
}, [])

console.log(currentColorArrangement)

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            alt={candyColor}
            key={index}
            style={{backgroundColor: candyColor}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
