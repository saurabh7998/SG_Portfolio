import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <div className="row mt-5">
        <Body />
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
