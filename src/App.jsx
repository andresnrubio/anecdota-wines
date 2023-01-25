import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    //TODO aca va a ser llamado el header y footer, app.jsx sera el root de la app
    <>
      {/* Aca va el header */}
      <Outlet />
      {/* Aca va el header */}
    </>
    )
}

export default App
