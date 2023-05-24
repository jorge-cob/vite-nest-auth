import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [greeting, setGreeting] = useState('')


  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setGreeting)
  }, []);


  return (
    <div className="App">
      <div>
      </div>
      <h1>{greeting}</h1>
      <div>

      </div>
    </div>
  )
}

export default App
