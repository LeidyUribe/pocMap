import logo from './logo.svg';
import './App.css';
import ArcgisMap from './components/ArcgisMap';
import { useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <main 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <ArcgisMap
          id="arcgis-map" 
          center={[-111.9315325, 33.4166305]} 
          height={780} 
          width={850}
          webSocketUrl="wss://dev-asu-ingestor-stream.cox2m.com"
        />
      </main>
    </div>
  );
}

export default App;
