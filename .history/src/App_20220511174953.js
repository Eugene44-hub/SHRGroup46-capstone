import { lazy, Suspense } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";


const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const login=lazy(()=>import('./pages/login/Login'))
function App() {
  return (
    <div className="App">

<Suspense fallback={<h1>Loading...</h1>}>
  <Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product" element={<Product/>} />
</Routes>
</Router>
</Suspense>
    </div>
  );
}

export default App;
