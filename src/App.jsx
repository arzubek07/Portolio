import Header from "./components/Header";
import Icons from "./pages/Icons";
import Buttons from "./pages/Buttons";
import About from "./pages/About";
import PortfolioSection from "./pages/Project";
import Stats from "./pages/Stats";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="pt-7 pl-28">
          <h1 className="text-7xl mb-5 font-semibold">Front-End</h1>
          <h1 className="text-7xl font-semibold text-blue-500 mb-5">Developer</h1>
          <p className="text-gray-600 max-w-96">
            Я junior frontend-разработчик, который активно развивается в веб-разработке и стремится писать чистый, понятный и поддерживаемый код.
          </p>
          <Buttons />
          <Icons />
        </div>
        <About />
        <Stats />
        <PortfolioSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
