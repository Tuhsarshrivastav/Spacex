import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LaunchScreen from './Screens/LaunchScreen'
import LaunchpadScreen from './Screens/LaunchpadScreen'
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/launch/:id" element={<LaunchpadScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
