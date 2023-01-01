import Palette from './Palette'
import seedColor from './seedsColor'
import { generatePallete } from './colorHelpers'
function App() {
  return (
    <div className="App">
      <Palette palette={generatePallete(seedColor[4])}/>
    </div>
  );
}

export default App;
