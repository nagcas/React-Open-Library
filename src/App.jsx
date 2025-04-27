import './App.css';
import Home from './components/home/Home';
import data from './components/data/data.json';
import { useGetChanges } from './components/Hooks/useGetChanges';
import { config } from './config/config.js';

function App() {
  const title = 'React Open Library';
  const { urlOpenLibrary, limitConfig } = config;

  const { newData, load }  = useGetChanges(`${urlOpenLibrary}?limit=${limitConfig}`);

  return (
    <>
      <Home
        data={newData}
        title={title}
        load={load}
      />
    </>
  );
}

export default App;
