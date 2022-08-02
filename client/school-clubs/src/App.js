import './App.css';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Clubs from './screens/Clubs';
import Club from './screens/Club';
import Students from './screens/Students';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileMenu />
      <Routes>
        <Route exact path="/" element={<Navigate to="clubs" />} />
        <Route path="clubs" element={<Clubs />}></Route>
        <Route path="clubs/:id" element={<Club />}></Route>
        <Route path="students" element={<Students />}></Route>
        <Route path="*" element={<Navigate to="clubs" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
