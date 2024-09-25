import "./App.css";
import Content from "./booklist/content";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Iklan from "./iklan/iklan";
import data from "../utils";

function App() {
  return (
    <div className="periplusApp">
      <Navbar />
      <Iklan />
      <Content data={data} />
      <Footer />
    </div>
  );
}

export default App;
