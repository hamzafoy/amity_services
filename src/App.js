/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accounting from './components/Accounting/Accounting';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Other from './components/Other/Other';
import Paralegal from './components/Paralegal/Paralegal';
import Travel from './components/Travel/Travel';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>

          <Route 
          path="/" 
          element={<Home/>}
          />

          <Route 
          path="/accounting" 
          element={<Accounting/>}
          />

          <Route
          path="/contact"
          element={<Contact/>}
          />

          <Route
          path="/additional_services"
          element={<Other/>}
          />

          <Route
          path="/paralegal"
          element={<Paralegal/>}
          />

          <Route
          path="/travel"
          element={<Travel/>}
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;