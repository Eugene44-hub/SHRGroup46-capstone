import { lazy, Suspense } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";

//read through comments on each component to understand properly 

//Note: you can use normal import statement on the pages lazy load is for only Routing pages

// API's too have been fetched in utility folder you can import and use with the syntax below

// import { fetchCompanyData, fetchPersonData } from "./utilities/apis";
// fetchPersonData.then(data=>console.log(data))
// fetchCompanyData.then(data=>console.log(data))

// happy coding

const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const Login=lazy(()=>import('./pages/login/Login'))
const Footer=lazy(()=>import('./components/footer/Footer'))



function App() {
  return (
    <div className="App">

<Suspense fallback={<h1>Loading...</h1>}>
  <Nav/>
  <Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product" element={<Product/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/login" element={<Login/>} />
<Route path="/members" element={<Members/>} />
</Routes>
</Router>
<Footer/>
</Suspense>
    </div>
  );
}

export default App;
