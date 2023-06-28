import Clients from "./Components/Clients";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
