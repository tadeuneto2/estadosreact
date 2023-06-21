import { useBearStore } from "./Stores/incrementStore"
import { HeaderComponent } from "./components/Header"

export function BearCounter() {
  const bears = useBearStore((state: any) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state: any) => state.increasePopulation)
  const reset = useBearStore((state: any) => state.removeAllBears)
  const title = useBearStore((state: any) => state.title)

  return <>
    <div>{title}</div>
    <button onClick={increasePopulation}>one up</button>
    <button onClick={reset}>reset</button>
  </>
}

function App() {

  return (
    <>
      <HeaderComponent />
      <BearCounter />
      
      <Controls />
    </>
  )
}

export default App
