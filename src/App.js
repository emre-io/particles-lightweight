import "./App.css";

function App() {
  window.particlesJS.load("particles-js", "particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  return (
    <div className="App">
      <div id="particles-js"></div>
      <div className="flex flex-col h-screen justify-center">
        <p className="text-white text-3xl font-bold underline">Emre Sahin</p>
        <p className="text-white font-bold py-2">About me</p>
        <div className="flex flex-row">
          <div className="md:basis-1/3 basis-1/12"></div>
          <div className="md:basis-1/3 basis-10/12">
            <div className="text-justify">
            </div>
          </div>
          <div className="md:basis-1/3 basis-1/12"></div>
        </div>
        <div className="justify-center items-center py-3">
          <div className="space-x-4">
            <a href="https://www.github.com/emre-io" className="bg-white rounded-md px-4 py-1">
              Github
            </a>
            <a href="https://www.xing.com/profile/Emre_Sahin99/" className="bg-white rounded-md px-4 py-1">
              Xing
            </a>
            <a href="https://www.linkedin.com/in/emre-sahin-8561b6323/" className="bg-white rounded-md px-4 py-1" >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
