import './App.css';
import './styles/index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Post from './Post';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/posts/:slug" element={<Post />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
