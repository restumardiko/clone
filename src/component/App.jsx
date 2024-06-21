import "./App.css";
import Booklist from "./booklist";
import Navbar from "./navbar";
import Footer from "./footer";

function App() {
  return (
    <div className="periplusApp">
      <Navbar />
      <Booklist />
      <Footer />
    </div>
  );
}

export default App;
