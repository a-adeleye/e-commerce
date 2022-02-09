import './App.css';
import Header, {SecondaryHeader} from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header itemNumber="16"/>
      <SecondaryHeader />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
