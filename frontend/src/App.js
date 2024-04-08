import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/CreateAccount' element={<CreateAccount/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
