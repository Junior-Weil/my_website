import { useState, React } from 'react'
import GradientBackground from './components/GradientBackground.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen">
        <GradientBackground>
            <div className="text-white text-center">
              <h1 className="text-5xl font-bold mb-4">Junior Weil</h1>
              <p className="text-xl">Software Engineer | Visionary Builder</p>
            </div>
        </GradientBackground>
      </div>
    </>
  )
}

export default App
