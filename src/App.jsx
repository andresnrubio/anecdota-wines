import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <LanguageProvider>{routing}</LanguageProvider>
    </>
  );
}

export default App;
