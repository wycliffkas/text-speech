import './App.css';
import Listen from './components/Listen';
import Speech from './components/Speech';


function App() {
  return (
    <div className="App">
      <h1>React SSML</h1>
      <Speech />
      <Listen />
    </div>
  );
}

export default App;
