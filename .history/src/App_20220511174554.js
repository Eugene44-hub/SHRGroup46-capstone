import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const login=lazy(()=>import('./pages/login/Login'))
function App() {
  return (
    <div className="App">
wrgrejgbjebnwre
{/* <Suspense fallback={<h1>Loading...</h1>}>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product" element={<Product/>} />
</Routes>
</Suspense> */}
    </div>
  );
}

export default App;
