
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Login from './components/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Header />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/editor" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


