import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'

function App() {
  const routing = useRoutes(routes)
  return (
    //TODO aca va a ser llamado el header y footer, app.jsx sera el root de la app
    <>
      { routing }
    </>
    )
}

export default App
