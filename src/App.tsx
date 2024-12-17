 
import './App.css'
import { Button } from './Componet/Button'
function App() {
  

  return (
    <>
        <button>
        <Button variable="primary" size="lg" text="CREATE" StartIcon="+"  onClick={() => { console.log("hiii"); }}   />
        <Button variable="secondary" size="sm" text="CREATE" StartIcon="+"  onClick={() => { console.log("hiii"); }}   />
        </button>
    </>
  )
}

export default App
