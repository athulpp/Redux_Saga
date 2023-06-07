import "./App.css";
import Cart from "./component/Cart";

import Header from "./component/Header";
import Main from "./component/Main";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />

<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/cart" element={<Cart/>}/>
</Routes>
    </div>
  );
}

export default App;
