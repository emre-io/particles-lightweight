import './App.css';
//import 'particles.js/particles';

function App() {  
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  window.particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded')
  })

  return (
    <div className="App">
      <div id="particles-js"></div>
    </div>
  );
}

export default App;
