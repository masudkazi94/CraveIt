import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from './components/Delivery'
import TopPicks from "./components/TopPicks";
import Meal from  "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
