import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";
import './App.css';

function App() {
  return (
    <div className="App">
   <Map view={{center: [0, 0], zoom: 2}}  style={{ height: '100vh', width: '100vw' }} >
    <Layers>
      <layer.Tile></layer.Tile>
    </Layers>
    
    </Map>

    </div>
  );
}

export default App;
