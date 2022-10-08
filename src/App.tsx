import Router from './routes'
import DataContextProvider from "./context/dataContext"

function App() {

  return (
    <DataContextProvider>
      <Router />
    </DataContextProvider>
  )
}

export default App
