import "./App.css";
import Booklist from "./booklist/booklist";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

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
