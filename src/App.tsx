 
import './App.css'
import { Button } from './Componet/Button'
import  {PlusIcon}  from './icons/PlusIcon';
function App() {
  

  return (
    <>
        <button>
        <Button variable="primary" size="lg" text="CREATE"  StartIcon={<PlusIcon/>}  onClick={() => { console.log("hiii"); }}   />
        <Button variable="secondary" size="sm" text="CREATE"    onClick={() => { console.log("hiii"); }}   />
        </button>
    </>
  )
}

export default App
