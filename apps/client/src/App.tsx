import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setGreeting)
  }, []);

  return (
    <div className="App">
      <div>
      </div>
      <h1>hello</h1>
      <div>
        Please log in
      </div>
    </div>
  )
};

export default App;
