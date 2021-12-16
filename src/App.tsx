import './App.css';
import Header from './components/Header'
import { Router } from './routes'
import { SearchProvider } from './contexts/searchContext';

function App() {
  return (
   <SearchProvider>
      <>
        <Header />
        <Router />
      </>
   </SearchProvider>
  );
}

export default App;
